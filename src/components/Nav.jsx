import React, { useState } from 'react'
import './styles.scss'

const data = [
    {
        title: 'menu',
        children: [
            {
                title: 'subMenu',
                children: [
                    {
                        title: 'deepMenu1',
                        children: [
                            {
                                title: 'veryDeepMenu',
                                children: []
                            }
                        ]
                    },
                    {
                        title: 'deepMenu2',
                        children: [],
                    },
                    {
                        title: 'deepMenu3',
                        children: [],
                    },

                ]
            },
            {
                title: 'subMenu2',
                children: [{
                    title: 'deepMenu1',
                    children: [{
                        title: 'deepMenu1',
                        children: [{
                            title: 'deepMenu1',
                            children: [],
                        },],
                    },
                    ],
                },
                {
                    title: 'deepMenu1',
                    children: [],
                },
                ]
            },
            {
                title: 'subMenu3',
                children: []
            },
        ]
    },
    {
        title: 'home',
        children: []
    }
]

const renderMenuItems = (item) => {
    return <li>{item.title}
        {item.children.length ? renderMenu(item.children) : <></>}
    </li>
}

const renderMenu = (items) => {
    return <ul>{items.map(item => renderMenuItems(item))}</ul>
}


export default function Nav() {
    const [items, setItems] = useState(data);

    return (
        <nav>
            {renderMenu(items)}
        </nav>
    )
}
