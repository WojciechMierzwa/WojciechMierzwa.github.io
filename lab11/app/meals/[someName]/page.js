import ShareMeal from "../share/page";

export async function generateStaticParams() {
    const mealNames = [
        "burger",
        "curry",
        "dumplings",
        "macncheese",
        "pizza",
        "schnitzel",
        "tomato-salad",
    ];

    return mealNames.map((someName) => ({
        someName,
    }));
}

export default async function MealDetailPage({ params }) {

    const { someName } = await params;

    return (
        <div style={{ textAlign: "center" }}>
            <h1>{someName.toUpperCase()}</h1>
            <p>Lets try some {someName}</p>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "20px 0",
                }}
            >
                <img
                    src={`/lab11v2/images/${someName}.jpg`}
                    style={{ width: "300px", height: "auto" }}
                    alt={`Image of ${someName}`}
                />
                <ShareMeal />
            </div>
        </div>
    );
}
