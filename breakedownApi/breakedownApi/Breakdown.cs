﻿namespace breakedownApi
{
    public class Breakdown
    {
        public int BreakdownId { get; set; }
        public string BreakdownRef { get; set; } = string.Empty;
        public string CompanyName { get; set; } = string.Empty;
        public string DriverName { get; set; } = string.Empty;
        public string RegistrationNumber { get; set; } = string.Empty;
        public DateTime BreakdownDate { get; set; } = DateTime.Now;
        public int Fk_DriverId { get; set; }
    }

    public class Driver
    {
        public int DriverId { get; set;}
        public string DriverName { get; set; } = string.Empty;
        public string CompanyName { get; set; } = string.Empty;
        public string RegistrationNumber { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string RepeatPassword { get; set; } = string.Empty;
    }
}
