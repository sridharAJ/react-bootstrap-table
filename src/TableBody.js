import React from 'react';
import TableRow from './TableRow';
import TableColumn from './TableColumn';
import classSet from 'classnames';

class TableBody extends React.Component{
  render(){
    var self = this;

    var containerClasses = classSet("table-container");

    var tableClasses = classSet("table", "table-bordered", {
      'table-striped': this.props.striped,
      'table-hover': this.props.hover,
      'table-condensed': this.props.condensed
    });

    var tableRows = this.props.data.map(function(data){
      var tableColumns = self.props.columns.map(function(column){
        var fieldValue = data[column.name];
        return(
          <TableColumn dataAlign={column.align}>{fieldValue}</TableColumn>
        )
      });

      return (
        <TableRow>{tableColumns}</TableRow>
      )
    });

    return(
      <div className={containerClasses}>
        <table className={tableClasses}>
          {tableRows}
        </table>
      </div>
    )
  }
}
TableBody.propTypes = {
  data: React.PropTypes.array,
  columns: React.PropTypes.array,
  striped: React.PropTypes.bool,
  hover: React.PropTypes.bool,
  condensed: React.PropTypes.bool
};
export default TableBody;