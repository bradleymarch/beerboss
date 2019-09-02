module.exports = {
	PORT: process.env.PORT || 3001,
	DATABASE_URL: process.env.DATABASE_URL || global.DATABASE_URL || "mongodb://bmarch1:bmarch1@ds215988.mlab.com:15988/beerbossdb",
	TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || global.TEST_DATABASE_URL || "mongodb://bmarch:bmarch@ds149437.mlab.com:49437/beerbosstest",
};
