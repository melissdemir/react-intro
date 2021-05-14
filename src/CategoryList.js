import React, { Component } from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap';

export default class CategoryList extends Component {
   
    state= {
            categories:[] 
           };
           componentDidMount(){
               this.getCategories();
           }

           getCategories = ()=>{
               fetch("http://localhost:3000/categories")
               .then(response=>response.json())
               .then(data=>this.setState({categories:data}));; //state i değiştirdik ( var olan category değerini data olarak değiştirdik)

           }
           
    render() {
        return (
            <div>

        <h3>{this.props.Info.title}</h3> 
        <ListGroup >
            {this.state.categories.map(category=>(
                <ListGroupItem active = {category.categoryName=== this.props.currentCategory?true:false}
                 //o anki kategorinin değeri current kategoriye eşitse true döner (mavi olur ) değil ise false (beyaz)
                    onClick= {()=> this.props.changeCategory(category)} 
                    key={category.id}
                >
                    {category.categoryName}
                </ListGroupItem>
         ))} 
        </ListGroup>
        <h4> {this.props.currentCategory} </h4>
    </div>
     );
}
}
