export default function Header() {
    return (
        <header
            style={{
                height: "70px",
                background: "#ffffff",
                borderBottom: "1px solid #E5E7EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 24px",
            }}
        >
            <h2
                style={{
                    color: "#023E8A",
                    fontWeight: 700,
                }}
            >
                📖 AU Maker
            </h2>

            <span style={{ color: "#64748B" }}>
                Version 0.1.0
            </span>
        </header>
    );
}