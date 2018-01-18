import format from 'utils/format-side-numbers'

export default function(props){
	props = {
		...props
	}
	if(props.spacing){
		props.cellSpacing = props.spacing
		delete props.spacing
	}

	if (props.verticalAlign) {
		props.valign = props.verticalAlign
		delete props.verticalAlign
	}
	if (props.horizontalAlign) {
		props.align = props.horizontalAlign
		delete props.horizontalAlign
	}
	if (props.padding && !props.style) {
		props.style = {
			padding: format(props.padding)
		}
	}
	return props
}