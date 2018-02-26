module.exports = {
    database: "ntask_development",
    username: "",
    password: "",
    params: {
        dialect: "sqlite",
        storage: "ntask.sqlite",
        define: {
            underscored: true
        }
    },
    jwtSecret: "Nta$k_AP1",
    jwtSession: { session: false }
}