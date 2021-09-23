# Getting Started
```
import ChakraReactTable from "chakra-react-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

const Component = () => {
  const rows = useMemo(
    () => [
      {
        id: "1",
        name: "Test 1",
      },
      {
        id: "2",
        name: "Test 2",
      },
    ],
    []
  )
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
    ],
    []
  )
  return <ChakraReactTable columns={columns} data={rows} />
}
```