module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'appsqlnode',
  define: {
    timestamps: true,
    underscored: true,
  },
};
