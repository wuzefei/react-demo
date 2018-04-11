module.exports = [
    {
        id: '1',
        name: '我的主页',
        router: '/dashboard',
    },
    {
        id: '2',
        name: '用户管理',
        children:[{
            id:'2-1',
            name:'用户列表',
            router: '/user',
        }]

    },
    {
        id: '3',
        name: '角色管理',
        children:[{
            id:'2-1',
            name:'角色列表',
            router: '/role',
        }]
    },
    {
        id: '4',
        name: '菜单管理',
        children:[{
            id:'2-1',
            name:'菜单列表',
            router: '/menus',
        }]
    },
    {
        id: '5',
        name: '组织架构管理',
        router: '/depart',
    },
]



// module.exports = [
//     {
//         id: '1',
//         name: '我的主页',
//         router: '/dashboard',
//     },
//     {
//         id: '2',
//         name: '用户管理',
//         children:[{
//             id:'2-1',
//             name:'用户列表',
//             router: '/user',
//         }]
//
//     },
//     {
//         id: '3',
//         name: '角色管理',
//         children:[{
//             id:'2-1',
//             name:'角色列表',
//             router: '/role',
//         }]
//     },
//     {
//         id: '4',
//         name: '菜单管理',
//         children:[{
//             id:'2-1',
//             name:'菜单列表',
//             router: '/menu',
//         }]
//     },
//     {
//         id: '5',
//         name: '组织架构管理',
//         router: '/depart',
//     },
// ]
