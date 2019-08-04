module.exports = {
    getRoutes: () => [
        {
            path: '/top-100-songs',
            getData: async () => ({
                data: await 'hello async data function',
            }),
        },
    ],
}