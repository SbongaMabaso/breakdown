namespace breakedownApi
{
    public class Breakdown
    {
        public string BreakdownRef { get; set; }
        public string CompanyName { get; set; } = string.Empty;
        public string DriverName { get; set; } = string.Empty;
        public string RegistrationNumber { get; set; } = string.Empty;
        public DateTime BreakdownDate { get; set; } = DateTime.Now;
    }
}
