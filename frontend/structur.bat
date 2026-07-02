@echo off
title AU Maker Structure Generator
color 0B

echo =====================================
echo      AU MAKER STRUCTURE GENERATOR
echo =====================================
echo.

:: ===========================
:: FOLDERS
:: ===========================

mkdir src\assets\fonts
mkdir src\assets\icons
mkdir src\assets\images
mkdir src\assets\templates

mkdir src\components\layout
mkdir src\components\ui
mkdir src\components\common
mkdir src\components\modals
mkdir src\components\editor

mkdir src\features\dashboard\components
mkdir src\features\dashboard\pages
mkdir src\features\dashboard\data

mkdir src\features\projects\components
mkdir src\features\projects\pages
mkdir src\features\projects\data

mkdir src\features\characters\components
mkdir src\features\characters\pages
mkdir src\features\characters\data

mkdir src\features\scenes\components
mkdir src\features\scenes\pages
mkdir src\features\scenes\data

mkdir src\features\templates\components
mkdir src\features\templates\pages

mkdir src\features\settings\pages

mkdir src\layouts
mkdir src\router
mkdir src\services
mkdir src\styles
mkdir src\types
mkdir src\utils
mkdir src\hooks
mkdir src\store

:: ===========================
:: LAYOUT
:: ===========================

type nul > src\layouts\MainLayout.tsx

type nul > src\components\layout\Header.tsx
type nul > src\components\layout\Sidebar.tsx
type nul > src\components\layout\Workspace.tsx
type nul > src\components\layout\PropertiesPanel.tsx

:: ===========================
:: UI
:: ===========================

type nul > src\components\ui\Button.tsx
type nul > src\components\ui\Input.tsx
type nul > src\components\ui\Textarea.tsx
type nul > src\components\ui\Card.tsx
type nul > src\components\ui\Panel.tsx
type nul > src\components\ui\Modal.tsx
type nul > src\components\ui\Badge.tsx
type nul > src\components\ui\Avatar.tsx
type nul > src\components\ui\Tabs.tsx
type nul > src\components\ui\Dropdown.tsx
type nul > src\components\ui\SearchBox.tsx
type nul > src\components\ui\ColorPicker.tsx

:: ===========================
:: COMMON
:: ===========================

type nul > src\components\common\EmptyState.tsx
type nul > src\components\common\Loading.tsx
type nul > src\components\common\PageTitle.tsx

:: ===========================
:: MODALS
:: ===========================

type nul > src\components\modals\BaseModal.tsx
type nul > src\components\modals\NewProjectModal.tsx
type nul > src\components\modals\DeleteProjectModal.tsx
type nul > src\components\modals\ConfirmModal.tsx

:: ===========================
:: DASHBOARD
:: ===========================

type nul > src\features\dashboard\pages\Dashboard.tsx

type nul > src\features\dashboard\components\DashboardHeader.tsx
type nul > src\features\dashboard\components\DashboardStats.tsx
type nul > src\features\dashboard\components\RecentProjects.tsx

:: ===========================
:: PROJECTS
:: ===========================

type nul > src\features\projects\pages\Projects.tsx

type nul > src\features\projects\components\ProjectCard.tsx
type nul > src\features\projects\components\ProjectGrid.tsx
type nul > src\features\projects\components\ProjectToolbar.tsx

type nul > src\features\projects\data\dummyProjects.ts

:: ===========================
:: CHARACTERS
:: ===========================

type nul > src\features\characters\pages\Characters.tsx

:: ===========================
:: SCENES
:: ===========================

type nul > src\features\scenes\pages\Scenes.tsx

:: ===========================
:: TEMPLATES
:: ===========================

type nul > src\features\templates\pages\Templates.tsx

:: ===========================
:: SETTINGS
:: ===========================

type nul > src\features\settings\pages\Settings.tsx

:: ===========================
:: ROUTER
:: ===========================

type nul > src\router\AppRouter.tsx

:: ===========================
:: SERVICES
:: ===========================

type nul > src\services\api.ts
type nul > src\services\projectService.ts
type nul > src\services\characterService.ts

:: ===========================
:: TYPES
:: ===========================

type nul > src\types\Project.ts
type nul > src\types\Character.ts
type nul > src\types\Scene.ts
type nul > src\types\Bubble.ts

:: ===========================
:: UTILS
:: ===========================

type nul > src\utils\date.ts
type nul > src\utils\string.ts
type nul > src\utils\color.ts

:: ===========================
:: STYLES
:: ===========================

type nul > src\styles\global.css
type nul > src\styles\variables.css
type nul > src\styles\reset.css
type nul > src\styles\typography.css

echo.
echo =====================================
echo       STRUCTURE CREATED SUCCESS!
echo =====================================
pause