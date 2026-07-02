import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../../features/dashboard/pages/Dashboard";
import Projects from "../../features/projects/pages/Projects";
import Characters from "../../features/characters/pages/Characters";
import Templates from "../../features/templates/pages/Templates";
import Settings from "../../features/settings/pages/Settings";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    );
}