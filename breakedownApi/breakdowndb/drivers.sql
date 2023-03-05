CREATE TABLE [dbo].[drivers]
(
	[DriverId] INT IDENTITY (1, 1) NOT NULL,
    [DriverName] NVARCHAR(50) NOT NULL, 
    [CompanyName] NVARCHAR(100) NOT NULL, 
    [RegistrationNumber] NVARCHAR(20) NOT NULL, 
    [Password] NVARCHAR(50) NOT NULL, 
    [RepeatPassword] NVARCHAR(50) NOT NULL,
    PRIMARY KEY CLUSTERED ([DriverId] ASC)
)
