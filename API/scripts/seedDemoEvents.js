const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const demoEvents = [
  {
    id: "9f96c43e-3458-4a0d-83bf-4c3f91f84701",
    name: "Noche de música en vivo",
    description: "Una noche para descubrir bandas locales y disfrutar música en vivo.",
    large_description:
      "Un encuentro ficticio con bandas locales, gastronomía y música en vivo. Ideal para probar la publicación y compra de entradas.",
    category: { name: "Concerts", modality: "Presential" },
    daysFromNow: 12,
    placeName: "Sala Aurora",
    address: {
      address_line: "Av. Corrientes 1200",
      city: "Buenos Aires",
      state: "Buenos Aires",
      country: "Argentina",
      zip_code: "1043",
    },
    start_time: "20:00:00",
    end_time: "23:30:00",
    guests_capacity: 180,
    age_range: "+18",
  },
  {
    id: "9f96c43e-3458-4a0d-83bf-4c3f91f84702",
    name: "Festival de sabores",
    description: "Un recorrido por puestos gastronómicos y propuestas de productores locales.",
    large_description:
      "Una feria ficticia al aire libre con degustaciones, música y productos regionales. La entrada es gratuita.",
    category: { name: "Fairs", modality: "Presential" },
    daysFromNow: 19,
    placeName: "Parque del Encuentro",
    address: {
      address_line: "Av. Belgrano 900",
      city: "Córdoba",
      state: "Córdoba",
      country: "Argentina",
      zip_code: "5000",
    },
    start_time: "12:00:00",
    end_time: "19:00:00",
    guests_capacity: 400,
    age_range: "ALL PUBLIC",
  },
  {
    id: "9f96c43e-3458-4a0d-83bf-4c3f91f84703",
    name: "Festival de verano",
    description: "Una jornada ficticia de música, actividades y espacios para compartir.",
    large_description:
      "Un festival de muestra con distintos escenarios y actividades durante todo el día.",
    category: { name: "Festivals", modality: "Presential" },
    daysFromNow: 26,
    placeName: "Anfiteatro del Lago",
    address: {
      address_line: "Av. del Parque 450",
      city: "Mendoza",
      state: "Mendoza",
      country: "Argentina",
      zip_code: "5500",
    },
    start_time: "15:00:00",
    end_time: "23:00:00",
    guests_capacity: 600,
    age_range: "+13",
  },
  {
    id: "9f96c43e-3458-4a0d-83bf-4c3f91f84704",
    name: "Taller de fotografía urbana",
    description: "Un taller introductorio para explorar la fotografía en la ciudad.",
    large_description:
      "Actividad ficticia con ejercicios prácticos, revisión de imágenes y consejos para mejorar tus fotografías.",
    category: { name: "Workshops", modality: "Presential" },
    daysFromNow: 33,
    placeName: "Espacio Taller",
    address: {
      address_line: "San Martín 620",
      city: "Rosario",
      state: "Santa Fe",
      country: "Argentina",
      zip_code: "2000",
    },
    start_time: "10:00:00",
    end_time: "13:00:00",
    guests_capacity: 24,
    age_range: "+13",
  },
  {
    id: "9f96c43e-3458-4a0d-83bf-4c3f91f84705",
    name: "Carrera recreativa de primavera",
    description: "Una carrera ficticia abierta a personas de distintos niveles.",
    large_description:
      "Encuentro recreativo con recorrido corto, puestos de hidratación y actividades para acompañantes.",
    category: { name: "Sports", modality: "Presential" },
    daysFromNow: 40,
    placeName: "Costanera Norte",
    address: {
      address_line: "Paseo Costero 100",
      city: "Buenos Aires",
      state: "Buenos Aires",
      country: "Argentina",
      zip_code: "1425",
    },
    start_time: "08:30:00",
    end_time: "12:00:00",
    guests_capacity: 250,
    age_range: "ALL PUBLIC",
  },
  {
    id: "9f96c43e-3458-4a0d-83bf-4c3f91f84706",
    name: "Charla: ideas para emprender",
    description: "Una charla online ficticia sobre ideas, organización y primeros pasos.",
    large_description:
      "Un encuentro virtual de muestra con una charla breve y un espacio final para preguntas.",
    category: { name: "Talks", modality: "Virtual" },
    daysFromNow: 47,
    placeName: "Online",
    start_time: "18:00:00",
    end_time: "19:30:00",
    guests_capacity: 150,
    age_range: "ALL PUBLIC",
  },
  {
    id: "9f96c43e-3458-4a0d-83bf-4c3f91f84707",
    name: "Seminario de diseño digital",
    description: "Un seminario online ficticio para compartir herramientas y procesos de diseño.",
    large_description:
      "Sesión virtual de muestra con presentaciones, ejemplos prácticos y preguntas de asistentes.",
    category: { name: "Seminars", modality: "Virtual" },
    daysFromNow: 54,
    placeName: "Online",
    start_time: "17:00:00",
    end_time: "20:00:00",
    guests_capacity: 100,
    age_range: "+16",
  },
  {
    id: "9f96c43e-3458-4a0d-83bf-4c3f91f84708",
    name: "Curso inicial de ilustración",
    description: "Un curso online ficticio para practicar técnicas básicas de ilustración.",
    large_description:
      "Clase virtual de muestra con ejercicios guiados y recursos para continuar practicando.",
    category: { name: "Online courses", modality: "Virtual" },
    daysFromNow: 61,
    placeName: "Online",
    start_time: "16:00:00",
    end_time: "18:00:00",
    guests_capacity: 80,
    age_range: "ALL PUBLIC",
  },
];

const seedDate = new Date();
const dateAfter = (days) => {
  const date = new Date(seedDate);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
};

async function seedDemoEvents() {
  if (process.env.ALLOW_DEMO_SEED !== "true") {
    throw new Error(
      'Refusing to seed the database. Set ALLOW_DEMO_SEED="true" only when DATABASE_URL points to a development or staging database.'
    );
  }

  const { Address, Category, Event, User, conn } = require("../src/db");

  try {
    await conn.authenticate();
    const transaction = await conn.transaction();

    try {
      let organizer;
      if (process.env.DEMO_ORGANIZER_ID) {
        organizer = await User.findByPk(process.env.DEMO_ORGANIZER_ID, {
          transaction,
        });
        if (!organizer) {
          throw new Error("DEMO_ORGANIZER_ID does not match an existing user.");
        }
      } else {
        const demoEmail = "eventoo-demo-organizer@invalid.example";
        organizer = await User.findOne({
          where: { email: demoEmail },
          transaction,
        });
        if (!organizer) {
          organizer = await User.create(
            {
              email: demoEmail,
              name: "Organizador",
              last_name: "Demo",
              password: null,
            },
            { transaction }
          );
        }
      }

      let created = 0;
      let existing = 0;

      for (const data of demoEvents) {
        const alreadySeeded = await Event.findByPk(data.id, { transaction });
        if (alreadySeeded) {
          existing += 1;
          continue;
        }

        const category = await Category.findOne({
          where: data.category,
          transaction,
        });
        if (!category) {
          throw new Error(
            `Required category not found: ${data.category.name} (${data.category.modality}). Start the API once to populate default categories, then retry.`
          );
        }
        if (!category.image) {
          throw new Error(`Category "${category.name}" has no image URL.`);
        }

        const event = await Event.create(
          {
            id: data.id,
            name: data.name,
            description: data.description,
            large_description: data.large_description,
            start_date: dateAfter(data.daysFromNow),
            end_date: dateAfter(data.daysFromNow),
            start_time: data.start_time,
            end_time: data.end_time,
            isPublic: true,
            isPremium: false,
            isPaid: false,
            age_range: data.age_range,
            price: 0,
            guests_capacity: data.guests_capacity,
            stock_ticket: data.guests_capacity,
            placeName: data.placeName,
            cover_pic: category.image,
            disability_access: false,
            parking: false,
            smoking_zone: false,
            pet_friendly: false,
          },
          { transaction }
        );

        await event.setCategory(category, { transaction });
        await event.setOrganizer(organizer, { transaction });

        if (data.address) {
          const address = await Address.create(data.address, { transaction });
          await event.setAddress(address, { transaction });
        }

        created += 1;
      }

      await transaction.commit();
      console.log(`Demo seed complete: ${created} created, ${existing} already present.`);
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  } finally {
    await conn.close();
  }
}

seedDemoEvents().catch((error) => {
  console.error("Demo seed failed:", error.message);
  process.exitCode = 1;
});
