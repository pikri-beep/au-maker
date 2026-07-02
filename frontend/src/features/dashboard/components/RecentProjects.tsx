type Props = {
    title: string;
    value: number;
};

export default function StatCard({ title, value }: Props) {
    return (
        <div
            style={{
                background: "white",
                border: "1px solid #E5E7EB",
                borderRadius: 10,
                padding: 20,
                flex: 1,
            }}
        >
            <h4
                style={{
                    color: "#64748B",
                    marginBottom: 15,
                }}
            >
                {title}
            </h4>

            <h1
                style={{
                    color: "#023E8A",
                    fontSize: 38,
                }}
            >
                {value}
            </h1>
        </div>
    );
}