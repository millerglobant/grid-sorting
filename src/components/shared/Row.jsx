
const Row = ({
  columns = 4,
  children
}) => {

  const gridStyle = { gridTemplateColumns : `repeat(${columns}, minmax(0, 1fr))`}

  return (
    <div  className={`grid gap-2`} style={gridStyle}>
      {children}
    </div>
  )
}

export default Row