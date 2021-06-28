import React, { Component } from 'react'
import { connect } from 'react-redux'
import { load_Data } from './../actions';

import getDatas from '../utils/getDatas'


export class Table extends Component {

    async componentDidMount() {
        const res = await getDatas();
        this.props.load_Datas(res.data)
    }

    showDatas = () => {
        const { loadingDatas } = this.props;
        const datas = loadingDatas.toDoList;
        if (!datas) return;
        return datas.map((dt, index) => (
            <tr>
                <td scope="row">{index + 1}</td>
                <td>{dt.name}</td>
                <td>{dt.status ? "Đã hoàn thành" : "Chưa hoàn thành"}</td>
                <td>
                    <button type="button" class="btn btn-primary">Sửa</button>
                    <button type="button" class="btn btn-danger">Xóa</button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div className="mt-5">
                <table className="table mt-3">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showDatas()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loadingDatas: state.loadList,
})

const mapDispatchToProps = (dispatch) => {
    return {
        load_Datas: (data) => dispatch(load_Data(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
