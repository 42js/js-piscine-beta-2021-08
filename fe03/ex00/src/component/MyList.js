import React from 'react';
import MyCard from './MyCard';
export default class MyList extends React.Component {
    render() {
        const { issue } = this.props;
        const mylist = issue.map(
            ({title, user}, index) => {
                <MyCard 
                    title = {title}
                    user = {user}
                    key = {index}
                />
            });
        return (
            <section className="mylist">
                {mylist}
            </section>

        );
    }
}