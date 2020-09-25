import React, {Component} from 'react';
import { MDBDataTable } from 'mdbreact';
import './SendRate.css'

export default class ScrollReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      rows: [],
      columns: [
        {
          label: 'Name',
          field: 'name',
          sort: 'asc',
          width: '15%'
        },
        {
          label: 'Company',
          field: 'company',
          sort: 'asc',
          width: '15%'
        },
        {
          label: 'Data',
          field: 'data',
          sort: 'asc',
          width: '10%'
        },
        {
          label: 'Comment',
          field: 'comment',
          sort: 'asc',
          width: '60%'
        }
      ],
    };
  }

  componentDidMount() {


    fetch("https://portfolio98kk.herokuapp.com/api/data")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            rows: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="layoutScroll">
          <MDBDataTable
            scrollY
            maxHeight="60vh"
            striped
            bordered
            small
            paging={false}
            data={{columns:this.state.columns,rows:this.state.rows}}
         />
        </div>
      );
    }
  }
}






