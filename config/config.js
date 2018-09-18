export default {
    routes: [{
        path: '/',
        component: '../layout/Home',
        routes:[
            {
                path: 'hello',
                component: './Hello.js'
            },
            {
                path: 'puzzles',
                component: './Puzzles.js',
            },
            {
                path:'dashboard',
                routes:[
                    { path: 'analyze', component:'Dashboard/Analyze.js' },
                    { path: 'monitor', component:'Dashboard/Monitor.js' },
                    { path: 'workplace', component:'Dashboard/WorkPlace.js' }
                ]
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