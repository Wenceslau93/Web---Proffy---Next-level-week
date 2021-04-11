const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
    // Inserir dados

    proffyValue = {
        name: "DIEGO WENCESLAU",
        avatar: "https://avatars2.githubusercontent.com/u/62226746?s=400&u=08b0071196bc7af9c68276aade3521f8a8074f12&v=4",
        whatsapp: "31988712037",
        bio: "Instrutor de Educação Física",
    }

    classValue = {
        subject: 1,
        cost: "20",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        },
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    // Consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = "1";
    `)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    console.log(selectedProffys)

    
})