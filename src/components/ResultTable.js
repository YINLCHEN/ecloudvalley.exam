import React, { Component } from 'react';
import { Table, Input} from 'semantic-ui-react';
import TableModal from './TableModal';
import { connect } from 'react-redux';

const colors = ['red']

class ResultTable extends Component {

    constructor(props){
        super(props);
        this.state = {
            open: false,
            searchStr: '',
            data:[]
        };
    }

    handleClick(data) {
        this.setState({ 
            open: true,
            data: data
         });
    }

    dynamicSearch = (data) => {
        this.setState({
            open: false,
            searchStr: data
        });
    }
    
    render() {
        var data = [];
        const pageIndex = this.props.pageIndex;
        
        if(pageIndex==='inbox'){
            data = [
                {'itemName':'Apples','itemCalories':'200','itemProtein':'123g'},
                {'itemName':'Orange','itemCalories':'310','itemProtein':'456g'}
            ];
        }
        else if(pageIndex==='spam'){
            data = [
                {'itemName':'Grapefruit','itemCalories':'940','itemProtein':'349g'},
                {'itemName':'Honeydew melon','itemCalories':'310','itemProtein':'1245g'},
                {'itemName':'Banana','itemCalories':'235','itemProtein':'3532g'},
                {'itemName':'Cherry','itemCalories':'67','itemProtein':'3g'}
            ];
        }
        else if(pageIndex==='updates'){
            data = [
                {'itemName':'Apples','itemCalories':'234','itemProtein':'51g'},
                {'itemName':'Orange','itemCalories':'964','itemProtein':'0g'},
                {'itemName':'Lemon','itemCalories':'41','itemProtein':'95g'},
                {'itemName':'Lichee','itemCalories':'94','itemProtein':'24g'},
                {'itemName':'Coconut','itemCalories':'267','itemProtein':'23g'},
                {'itemName':'Grape','itemCalories':'78','itemProtein':'44g'}
            ];
        }

        const searchStr = this.state.searchStr;
        const element =  Object.keys(data).map((key, index) => 
            <Table.Row key = {index} onClick={() => this.handleClick(data[key])} name={data[key].itemName}>
                <Table.Cell>{data[key].itemName}</Table.Cell>
                <Table.Cell>{data[key].itemCalories}</Table.Cell>
                <Table.Cell>{data[key].itemProtein}</Table.Cell>
            </Table.Row>
            ).filter(findSearchStr);
        
        function findSearchStr(element){
            if(searchStr===0 || searchStr===''){
                return true
            }
            else{
                const itemName = element.props.name
                for(var i=0 ; i<itemName.length ; i++){
                    if(itemName.toUpperCase().substring(i, i+searchStr.length) === searchStr.toUpperCase()){
                        return true
                    }
                }
            }
        }

        return (
            <div>
                <Input focus icon='search' placeholder='Search...' onChange={e => this.dynamicSearch(e.target.value)}/>
                {colors.map(color => (
                    <Table celled selectable color={color} key={color} >
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Food</Table.HeaderCell>
                                <Table.HeaderCell>Calories</Table.HeaderCell>
                                <Table.HeaderCell>Protein</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {element}
                        </Table.Body>
                    </Table>
                ))}
                <TableModal open={this.state.open} data={this.state.data} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        pageIndex: state.pageIndex
    };
}

export default connect(mapStateToProps)(ResultTable);
