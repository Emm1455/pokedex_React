import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';

function FavoritesList () {
  const state = useSelector(state => state.favorites.value);
  // const favoritesList = state.map(item => (
  //   <div key={item.id}>
  //     N°{item.id} | {item.name} | {item.types.map(element => element + ', ')}
  //   </div>
  // ))
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 120 },
    { field: 'types', headerName: 'Types', width: 120 }
  ];
  const rows = state;

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5
            }
          }
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        density='comfortable'
        showColumnVerticalBorder
        // showCellVerticalBorder
      />
    </Box>
  );
}

export default FavoritesList;
