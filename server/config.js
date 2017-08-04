module.exports = {
	PORT: process.env.PORT || 8080,
	DATABASE_URL: process.env.DATABASE_URL || global.DATABASE_URL || "mongodb://bmarch:bmarch@ds127883.mlab.com:27883/beerboss",
};
