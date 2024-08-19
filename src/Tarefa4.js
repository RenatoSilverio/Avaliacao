import React from 'react';

function GroupByCategory({ items }) {
    const groupByCategory = (itemsArray) => {
        return itemsArray.reduce((acc, item) => {
            if (!acc[item.category]) {
                acc[item.category] = [];
            }
            acc[item.category].push(item);
            return acc;
        }, {});
    };

    const groupedItems = groupByCategory(items);

    return (
        <div>
            <h3>Agrupamento por Categoria:</h3>
            {Object.entries(groupedItems).map(([category, items]) => (
                <div key={category}>
                    <h4>{category}</h4>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

const Tarefa4 = () => {
    const items = [
        { name: 'apple', category: 'fruit' },
        { name: 'carrot', category: 'vegetable' },
        { name: 'banana', category: 'fruit' },
        { name: 'broccoli', category: 'vegetable' }
    ];

    return (
        <div>
            <h1>Tarefa 4 - Agrupamento de Objetos</h1> 
            <GroupByCategory items={items} />
            <br/>
            
        </div>
    );
};

export default Tarefa4;
