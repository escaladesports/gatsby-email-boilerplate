import format from 'utils/format-side-numbers'

export default function(props){
	props = {
		style: {},
		...props
	}
	if(props.spacing){
		props.cellSpacing = props.spacing
		delete props.spacing
	}

	if ('verticalAlign' in props) {
		props.valign = props.verticalAlign
		props.style.verticalAlign = props.verticalAlign
		delete props.verticalAlign
	}
	if('align' in props){
		props.horizontalAlign = props.align
		delete props.align
	}
	if ('horizontalAlign' in props) {
		props.align = props.horizontalAlign
		props.style.textAlign = props.horizontalAlign
		delete props.horizontalAlign
	}
	if (props.padding) {
		props.style.padding = format(props.padding)
	}
	console.log(props)
	return props
}