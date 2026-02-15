const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const app = express();

app.use(express.json());
app.use('/', taskRoutes);

if (require.main == module) {
    const PORT =3000;
    app.listen(PORT, () => {
        console.log(`Server is working in: http://localhost:${PORT}`);
    });
}

module.exports = app;