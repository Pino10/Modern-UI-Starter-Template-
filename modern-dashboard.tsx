<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard | Modern UI</title>
    <style>
        :root {
            --primary: #3b82f6;
            --primary-hover: #2563eb;
            --surface: #ffffff;
            --background: #f1f5f9;
            --text: #0f172a;
            --text-secondary: #64748b;
            --border: #e2e8f0;
            --success: #22c55e;
            --error: #ef4444;
            --warning: #f59e0b;
            --sidebar-width: 260px;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: system-ui, -apple-system, sans-serif;
        }

        body {
            background: var(--background);
            min-height: 100vh;
            display: grid;
            grid-template-columns: var(--sidebar-width) 1fr;
        }

        /* Sidebar Styles */
        .sidebar {
            background: var(--surface);
            height: 100vh;
            position: fixed;
            width: var(--sidebar-width);
            border-right: 1px solid var(--border);
            padding: 1.5rem;
            overflow-y: auto;
            transition: transform 0.3s ease;
        }

        .sidebar-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding-bottom: 1.5rem;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid var(--border);
        }

        .logo-circle {
            width: 2.5rem;
            height: 2.5rem;
            background: var(--primary);
            border-radius: 0.75rem;
        }

        .nav-link {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem 1rem;
            color: var(--text-secondary);
            text-decoration: none;
            border-radius: 0.5rem;
            transition: all 0.2s;
            margin-bottom: 0.25rem;
        }

        .nav-link:hover {
            background: var(--background);
            color: var(--text);
        }

        .nav-link.active {
            background: var(--primary);
            color: white;
        }

        /* Main Content Styles */
        .main-content {
            margin-left: var(--sidebar-width);
            padding: 1.5rem;
        }

        /* Header Styles */
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 2rem;
            background: var(--surface);
            padding: 1rem 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .search-bar {
            position: relative;
            width: 300px;
        }

        .search-input {
            width: 100%;
            padding: 0.5rem 1rem;
            padding-left: 2.5rem;
            border: 1px solid var(--border);
            border-radius: 0.5rem;
            font-size: 0.875rem;
            transition: all 0.2s;
        }

        .search-input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        /* Stats Grid */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .stat-card {
            background: var(--surface);
            padding: 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            transition: transform 0.2s;
        }

        .stat-card:hover {
            transform: translateY(-2px);
        }

        /* Chart Card */
        .chart-card {
            background: var(--surface);
            padding: 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            margin-bottom: 1.5rem;
        }

        /* Table Styles */
        .table-container {
            background: var(--surface);
            padding: 1.5rem;
            border-radius: 0.75rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            overflow-x: auto;
        }

        .data-table {
            width: 100%;
            border-collapse: collapse;
        }

        .data-table th,
        .data-table td {
            padding: 0.75rem 1rem;
            text-align: left;
            border-bottom: 1px solid var(--border);
        }

        .data-table th {
            background: var(--background);
            font-weight: 500;
            color: var(--text-secondary);
        }

        .data-table tr:last-child td {
            border-bottom: none;
        }

        .data-table tbody tr:hover {
            background: var(--background);
        }

        /* Status Badge */
        .status-badge {
            padding: 0.25rem 0.75rem;
            border-radius: 1rem;
            font-size: 0.75rem;
            font-weight: 500;
        }

        .status-active {
            background: #dcfce7;
            color: var(--success);
        }

        .status-pending {
            background: #fef3c7;
            color: var(--warning);
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            body {
                grid-template-columns: 1fr;
            }

            .sidebar {
                transform: translateX(-100%);
                z-index: 50;
            }

            .sidebar.active {
                transform: translateX(0);
            }

            .main-content {
                margin-left: 0;
            }

            .header {
                flex-direction: column;
                gap: 1rem;
            }

            .search-bar {
                width: 100%;
            }
        }

        /* Menu Toggle Button */
        .menu-toggle {
            display: none;
            padding: 0.5rem;
            background: none;
            border: none;
            cursor: pointer;
        }

        @media (max-width: 768px) {
            .menu-toggle {
                display: block;
            }
        }

        /* Button Styles */
        .btn {
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            border: 1px solid var(--border);
            background: var(--surface);
            color: var(--text);
        }

        .btn:hover {
            background: var(--background);
        }

        .btn-primary {
            background: var(--primary);
            color: white;
            border: none;
        }

        .btn-primary:hover {
            background: var(--primary-hover);
        }

        /* Notification Badge */
        .notification-badge {
            position: relative;
        }

        .notification-badge::after {
            content: '';
            position: absolute;
            top: -2px;
            right: -2px;
            width: 8px;
            height: 8px;
            background: var(--error);
            border-radius: 50%;
            border: 2px solid var(--surface);
        }
    </style>
</head>
<body>
    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
        <div class="sidebar-logo">
            <div class="logo-circle"></div>
            <h1 style="font-size: 1.25rem; font-weight: 600;">Dashboard</h1>
        </div>

        <nav>
            <a href="#" class="nav-link active">
                📊 Dashboard
            </a>
            <a href="#" class="nav-link">
                📈 Analytics
            </a>
            <a href="#" class="nav-link">
                👥 Customers
            </a>
            <a href="#" class="nav-link">
                📦 Products
            </a>
            <a href="#" class="nav-link">
                📑 Reports
            </a>
            <a href="#" class="nav-link">
                ⚙️ Settings
            </a>
        </nav>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Header -->
        <header class="header">
            <button class="menu-toggle" onclick="toggleSidebar()">☰</button>
            
            <div class="search-bar">
                <input type="text" class="search-input" placeholder="Search...">
            </div>

            <div class="header-actions">
                <button class="btn notification-badge">
                    🔔 
                </button>
                <button class="btn">
                    👤 John Doe
                </button>
            </div>
        </header>

        <!-- Stats Grid -->
        <div class="stats-grid">
            <div class="stat-card">
                <h3 style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.5rem;">
                    Total Revenue
                </h3>
                <p style="font-size: 1.5rem; font-weight: 600;">$24,500</p>
                <span style="color: var(--success); font-size: 0.875rem;">↑ 12% vs last month</span>
            </div>

            <div class="stat-card">
                <h3 style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.5rem;">
                    Active Users
                </h3>
                <p style="font-size: 1.5rem; font-weight: 600;">1,234</p>
                <span style="color: var(--success); font-size: 0.875rem;">↑ 8% vs last month</span>
            </div>

            <div class="stat-card">
                <h3 style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.5rem;">
                    New Customers
                </h3>
                <p style="font-size: 1.5rem; font-weight: 600;">321</p>
                <span style="color: var(--error); font-size: 0.875rem;">↓ 4% vs last month</span>
            </div>

            <div class="stat-card">
                <h3 style="color: var(--text-secondary); font-size: 0.875rem; margin-bottom: 0.5rem;">
                    Total Orders
                </h3>
                <p style="font-size: 1.5rem; font-weight: 600;">456</p>
                <span style="color: var(--success); font-size: 0.875rem;">↑ 16% vs last month</span>
            </div>
        </div>

        <!-- Recent Activity -->
        <div class="table-container">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <h2 style="font-size: 1.25rem; font-weight: 600;">Recent Activity</h2>
                <button class="btn btn-primary">View All</button>
            </div>

            <table class="data-table">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sarah Johnson</td>
                        <td>#ORD-001</td>
                        <td><span class="status-badge status-active">Completed</span></td>
                        <td>$250.00</td>
                        <td>Today, 2:30 PM</td>
                    </tr>
                    <tr>
                        <td>Michael Brown</td>
                        <td>#ORD-002</td>
                        <td><span class="status-badge status-pending">Pending</span></td>
                        <td>$150.00</td>
                        <td>Today, 1:15 PM</td>
                    </tr>
                    <tr>
                        <td>Emily Davis</td>
                        <td>#ORD-003</td>
                        <td><span class="status-badge status-active">Completed</span></td>
                        <td>$350.00</td>
                        <td>Today, 11:30 AM</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>

    <script>
        // Toggle Sidebar on Mobile
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('active');
        }

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            const sidebar = document.getElementById('sidebar');
            const menuToggle = document.querySelector('.menu-toggle');
            
            if (window.innerWidth <= 768 && 
                !sidebar.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                sidebar.classList.remove('active');
            }
        });

        // Responsive handling
        window.addEventListener('resize', () => {
            const sidebar = document.getElementById('sidebar');
            if (window.innerWidth > 768) {
                sidebar.classList.remove('active');
            }
        });
    </script>
</body>
</html>
