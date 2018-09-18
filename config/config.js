export default {
    routes: [{
        path: '/',
        component: '../layout/Home',
        routes:[
            {
                path: 'hello',
                component: './Hello'
            },
            {
                path: 'puzzles',
                component: './Puzzles',
            },
            {
                path:'dashboard',
                routes:[
                    { path: 'analyze', component:'Dashboard/Analyze' },
                    { path: 'monitor', component:'Dashboard/Monitor' },
                    { path: 'workplace', component:'Dashboard/WorkPlace' }
                ]
            },
            {
                path:'list',
                component: './List/index'
            }
        ],
    }],

    
    plugins: [
        [
            'umi-plugin-react', 
            {
                antd:true,
                dva: true
            }
        ]
    ],
}