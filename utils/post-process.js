import glob from 'globby'
import { remove, readFile, outputFile } from 'fs-extra'
import textVersion from 'textversionjs'
import { parse, join } from 'path'
import posthtml from 'posthtml'
import removeTags from 'posthtml-remove-tags'
import doctype from 'posthtml-doctype'
import inlineCss from 'posthtml-inline-css'
import beautify from 'posthtml-beautify'
import stripComments from 'strip-html-comments'
import removeAttributes from 'posthtml-remove-attributes'
import cheerio from 'cheerio'

import custom from './posthtml-custom'

async function removeUnusedFiles(){
	let paths = await glob('public/**/*.{js,css,json,map}')
	let promises = paths.map(path => {
		return remove(path)
	})
	await Promise.all(promises)
}

async function createTextFiles(contents){
	let promises = []
	for(let path in contents){
		let html = contents[path]
		let text = textVersion(html, {
			linkProcess: (href, linkText) => {
				if(href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0){
					return linkText
				}
				return `${linkText} (${href})`
			},
			imgProcess: (src, alt) => ``,
		})
		path = parse(path)
		path = `${path.dir}/${path.name}.txt`
		console.log(path)
		promises.push(outputFile(path, text))
	}
	await Promise.all(promises)
}

async function emailifyHtml(contents){
	let promises = []
	for(let path in contents){
		let html = contents[path]

		html = stripComments(html)
		html = await posthtml()
			.use(inlineCss())
			.use(removeTags({ tags: ['style', 'script', 'link'] }))
			.use(doctype({ doctype: 'HTML 4.01 Strict' }))
			.use(removeAttributes([
				'data-reactid',
				'data-reactroot',
				'data-react-checksum',
				'data-react-helmet',
			]))
			.use(custom())
			.use(beautify({
				rules: { indent: 'tab' }
			}))
			.process(html)
		html = html.html

		promises.push(outputFile(path, html))
		promises.push(outputFile(`${path}.txt`, html))
	}
	await Promise.all(promises)
}

async function processHtml() {
	let paths = await glob('public/**/*.html')
	let promises = paths.map(path => {
		return readFile(path, 'utf8')
	})
	let contents = await Promise.all(promises)
	let obj = {}
	paths.forEach((path, key) => {
		obj[path] = contents[key]
	})

	await Promise.all([
		createTextFiles(obj),
		emailifyHtml(obj),
	])
}

async function postProcess(){
	await Promise.all([
		removeUnusedFiles(),
		processHtml(),
	])
}
postProcess()