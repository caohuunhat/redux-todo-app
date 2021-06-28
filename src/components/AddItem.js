import React, { Component } from 'react'

class AddItem extends Component {
    state = {
        name: '',
        status: ''
    }

    onChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        })
    }

    onSubmit = (e) => {
        
    }

    render() {
        return (
            <div className="container mt-5">
                <h2>Thêm việc cần làm</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group row mb-2">
                        <div className="col-sm-1-12">
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Name"
                                onChange={this.onChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row mb-2">
                        <div className="col-sm-1-12">
                            <div className="form-group">
                                <select
                                    className="form-control"
                                    name="status"
                                    onChange={this.onChange}
                                >
                                    <option>Trạng thái</option>
                                    <option>Chưa hoàn thành</option>
                                    <option>Đã Hoàn thành</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-primary">Thêm mới</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddItem;