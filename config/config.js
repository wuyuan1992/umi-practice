export default {
    routes: [{
        path: '/',
        component: './Hello'
    }],

    
    plugins: [
        [
            'umi-plugin-react', 
            {
                antd:true
            }
        ]
    ],
}