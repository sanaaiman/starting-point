const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/')


const Place = db.define("place", {
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.INTEGER
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


const Hotel = db.define("hotel", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    num_stars: {
        type: Sequelize.FLOAT
    },
    ameneties: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
    }
});

const Activity = db.define("activity", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age_range: {
        type: Sequelize.STRING
    }

})

const Restaurant = db.define("restaurant", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cuisine: {
        type: Sequelize.ARRAY(Sequelize.STRING)
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);


module.exports = {
    db: db,
    Place: Place,
    Hotel: Hotel,
    Activity: Activity,
    Restaurant: Restaurant
};