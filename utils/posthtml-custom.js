'use strict'

module.exports = function(){
	return function custom(tree) {
		tree.walk(node => {
			if (typeof node === `object`) {
				switch(node.tag){
					case `html`:
						Object.assign(node.attrs, {
							'xmlns:v': `urn:schemas-microsoft-com:vml`,
							'xmlns:o': `urn:schemas-microsoft-com:office:office`,
						})
						break
					case `head`:
						node.content.push(
							{
								tag: `style`,
								attrs: {
									type: `text/css`
								},
								content: `
									#__bodyTable__ {
										margin: 0;
										padding: 0;
										width: 100% !important;
									}
								`
							},
							`
								<!--[if gte mso 9]>
								<xml>
									<o:OfficeDocumentSettings>
									<o:AllowPNG />
									<o:PixelsPerInch>96</o:PixelsPerInch>
									</o:OfficeDocumentSettings>
								</xml>
								<![endif]-->
							`
						)
						break
					case `img`:
						let src = node.attrs.src
						if (process.env.URL && src.indexOf(`://`) === -1) {
							let url = process.env.URL.split(`://`)
							src = join(url[1], src)
							src = `${url[0]}://${src}`
							node.attrs.src = src
						}
						break
				}
			}
			return node
		})
		return tree
	}
}