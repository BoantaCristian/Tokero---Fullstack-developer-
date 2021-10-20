import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import * as actions from "../services/actions/operations";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

const Withdrawals = (props) => {
    useEffect(() => {
        switch (1) {
            case 1:
                props.fetchWithdrawals()
                break;
        
            default:
                break;
        }
        
    },[])

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Amount</TableCell>
                        <TableCell>To Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        props.Withdrawals.map((record, index)=>{
                            return(
                                <TableRow key={index}>
                                    <TableCell> {record.amount} </TableCell>
                                    <TableCell> {record.toAddress} </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const mapStateToProps = state => {
    return{
        Withdrawals: state.operations.withdrawals
    }
}

const mapActionToProps = {
    fetchWithdrawals: actions.fetchWithdrawals
}

export default connect(mapStateToProps, mapActionToProps) (Withdrawals)
