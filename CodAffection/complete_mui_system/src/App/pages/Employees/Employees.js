import { useState } from 'react';
import PageHeader from "../../components/PageHeader";
import EmployeeForm from "./EmployeeForm";
import PeopleOullineTwoToOneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper, TableCell, TableRow, TableBody, Toolbar, InputAdornment } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import useTable from '../../components/useTable';
import * as employeeService from '../../services/employeeService';
import Controls from '../../components/controls/Controls';
import Search from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }, 
  searchInput: {
    width: '75%'
  }
}));


const headCells = [
  { id: 'fullName', label: 'Employee Name' },
  { id: 'email', label: 'Email Address (Personal)' },
  { id: 'mobile', label: 'Mobile Number' },
  { id: 'department', label: 'Department' },
  { id: 'actions', label: 'Actions', disableSorting: true }
]

export default function Employees() {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeService.getAllEmployees());
  const [filterFn, setFilterFn] = useState({ fn: items => { return items; } });

  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  } = useTable(records, headCells, filterFn);

  const handleSearch = e => {
    let target = e.target.value.toLowerCase();
    setFilterFn({
      fn: items => {
        if (target.value === "")
          return items;
        else
          return items.filter(x => x.fullName.toLowerCase().includes(target));
      }
    })
  }

  return (
    <>
      <PageHeader
        title="New Employee"
        subtitle="Form design with validation"
        icon={<PeopleOullineTwoToOneIcon fontSize='large' />}
      />
      <Paper className={classes.pageContent}>
        {/* <EmployeeForm /> */}
        <Toolbar>
          <Controls.Input 
            label="Search Employees"
            className = {classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Search />
                </InputAdornment>
              )
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {
              recordsAfterPagingAndSorting().map((item, index) =>
                (
                  <TableRow key={`row-${index}`}>
                    <TableCell>{item.fullName}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.mobile}</TableCell>
                    <TableCell>{item.department}</TableCell>
                  </TableRow>
                )
              )
            }
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  )
}