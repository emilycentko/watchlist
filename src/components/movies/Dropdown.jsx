// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';

// const currencies = [
//   {
//     value: 'USD',
//     label: '$',
//   },
//   {
//     value: 'EUR',
//     label: '€',
//   },
//   {
//     value: 'BTC',
//     label: '฿',
//   },
//   {
//     value: 'JPY',
//     label: '¥',
//   },
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& .MuiTextField-root': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

// export default function MultilineTextFields() {
//   const classes = useStyles();
//   const [currency, setCurrency] = React.useState('EUR');

 

//   return (
//     <form className={classes.root} noValidate autoComplete="off">
//       <div>
//         <TextField
//           id="watchListId"
//           select
//           label="Select"
//           value={watchListMovie.watchListId}
//           onChange={handleControlledInputChange}
//           helperText="Choose a watch list:"
//           variant="outlined"
//         >
//           {watchLists.filter(watchList => watchList.userId === currentUserId).map(watchList => (
//             <MenuItem key={watchList.id} value={watchList.id}>
//             {watchList.name}
//             </MenuItem>
//           ))}
//         </TextField>
//       </div>
//     </form>
//   );
// }

// <fieldset>
//             <div className="form-group">

//                 <label htmlFor="watchList">Choose a watch list:</label>
//                 <select value ={watchListMovie.watchListId} id="watchListId" className="form-control" onChange={handleControlledInputChange}>
                
//                     <option value="0">Select a watch list</option>
//                     {watchLists.filter(watchList => watchList.userId === currentUserId).map(watchList => (
//                         <option key={watchList.id} value={watchList.id}>
//                             {watchList.name}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//         </fieldset>


