-- создание таблицы personal_info
CREATE TABLE personal_info (
    id SERIAL PRIMARY KEY,           -- Первичный ключ
    full_name VARCHAR(255) NOT NULL, -- Поле для хранения полного имени
    passport VARCHAR(20) NOT NULL,
    passport_place VARCHAR(255) NOT NULL,
    passport_date DATE NOT NULL,
    birth_place VARCHAR(255) NOT NULL,
    birth_date DATE NOT NULL,
    residence VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- создание таблицы visit_info
CREATE TABLE visit_info (
    id SERIAL PRIMARY KEY,           -- Первичный ключ
    full_name VARCHAR(255) NOT NULL, -- Поле для хранения полного имени
    personal_info_id INT REFERENCES personal_info(id) ON DELETE CASCADE,  -- Внешний ключ
    department VARCHAR(255) NOT NULL,
    job VARCHAR(255) NOT NULL,
    purpose VARCHAR(255) NOT NULL,
    visit_date DATE NOT NULL,
    attendant VARCHAR(255) NOT NULL,
    coordinator VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

