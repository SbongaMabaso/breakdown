CREATE TABLE [dbo].[breakdowns]
(
	[BreakdownId] INT IDENTITY (1, 1) NOT NULL,
    [BreakdownRef] NVARCHAR(50) NOT NULL, 
    [CompanyName] NVARCHAR(50) NOT NULL, 
    [DriverName] NVARCHAR(50) NOT NULL, 
    [RegistrationNumber] NVARCHAR(50) NOT NULL, 
    [BreakdownDate] DATETIME2 NOT NULL,
    [Fk_DriverId] INT NULL, 
    PRIMARY KEY CLUSTERED ([BreakdownId] ASC)
)
