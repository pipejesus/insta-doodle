const ColorIndicator = (props) => {

	return (
		<div style={
			{
				backgroundColor: `rgba(${props.color.r}, ${props.color.g}, ${props.color.b}, ${props.color.a})`,
				width: '20px',
				height: '20px'
			}
		}></div>
	)
}
export default ColorIndicator;
