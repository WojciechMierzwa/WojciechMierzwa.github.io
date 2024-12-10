import Link from 'next/link';

export default function MealsPage() {
    const mealNames = [
        "burger",
        "curry",
        "dumplings",
        "macncheese",
        "pizza",
        "schnitzel",
        "tomato-salad",
    ];

    // Grupa posiłków w rzędach po 3
    const groupedMeals = [];
    for (let i = 0; i < mealNames.length; i += 3) {
        groupedMeals.push(mealNames.slice(i, i + 3));
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>Meals Page</h1>
            {groupedMeals.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    {row.map((mealName, mealIndex) => (
                        <div key={mealIndex} style={{ flex: '1', margin: '0 10px', textAlign: 'center' }}>
                            <Link href={`/meals/${mealName}`} style={{ textDecoration: 'none' }}>
                                <img 
                                    src={`/lab11v2/images/${mealName}.jpg`} 
                                    alt={mealName} 
                                    style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '8px', cursor: 'pointer', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }} 
                                />
                                <h2 style={{ marginTop: '10px', fontSize: '1.2rem', color: '#333' }}>
                                    {mealName.toUpperCase()}
                                </h2>
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
