import { Meal } from "../entities/Meal";

// ----------------------------------------------------------------------

export class MealsRepository {
    private readonly database = require("./../database/db");

    public async findAll(): Promise<Meal[]> {
        const query = "SELECT * FROM meals ORDER BY id ASC";
        const response = await this.database.query(query);

        return response.rows;
    }

    public async createMeal(meal: Meal): Promise<Meal> {
        const query = `INSERT INTO meals (name, description, price, image, meal_category_id)
                       VALUES ($1, $2, $3, $4, $5) RETURNING *`;
        const values = [
            meal.name,
            meal.description,
            meal.price,
            meal.image,
            meal.meal_category_id,
        ];
        const response = await this.database.query(query, values);

        return response.rows[0];
    }

    public async deleteMeal(mealId: number): Promise<void> {
        const query = `DELETE
                       FROM meals
                       WHERE id = $1`;
        const values = [mealId];
        const response = await this.database.query(query, values);

        return response.rows[0];
    }

    public async mealNameIsUnique(mealName: string) {
        const query = `SELECT COUNT(*)
                       FROM meals
                       WHERE LOWER(name) = LOWER($1)`;
        const values = [mealName];
        const response = await this.database.query(query, values);

        return response.rows[0].count === "0";
    }
    public async findById(mealId: number): Promise<Meal> {
        const query = `SELECT * FROM meals WHERE id = $1`;
        const values = [mealId];
        const response = await this.database.query(query, values);

        return response.rows[0];
    }
}
