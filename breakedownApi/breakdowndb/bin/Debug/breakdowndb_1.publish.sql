﻿/*
Deployment script for breakdowndb

This code was generated by a tool.
Changes to this file may cause incorrect behavior and will be lost if
the code is regenerated.
*/

GO
SET ANSI_NULLS, ANSI_PADDING, ANSI_WARNINGS, ARITHABORT, CONCAT_NULL_YIELDS_NULL, QUOTED_IDENTIFIER ON;

SET NUMERIC_ROUNDABORT OFF;


GO
:setvar DatabaseName "breakdowndb"
:setvar DefaultFilePrefix "breakdowndb"
:setvar DefaultDataPath "C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\"
:setvar DefaultLogPath "C:\Program Files\Microsoft SQL Server\MSSQL16.SQLEXPRESS\MSSQL\DATA\"

GO
:on error exit
GO
/*
Detect SQLCMD mode and disable script execution if SQLCMD mode is not supported.
To re-enable the script after enabling SQLCMD mode, execute the following:
SET NOEXEC OFF; 
*/
:setvar __IsSqlCmdEnabled "True"
GO
IF N'$(__IsSqlCmdEnabled)' NOT LIKE N'True'
    BEGIN
        PRINT N'SQLCMD mode must be enabled to successfully execute this script.';
        SET NOEXEC ON;
    END


GO
USE [$(DatabaseName)];


GO
PRINT N'Starting rebuilding table [dbo].[drivers]...';


GO
BEGIN TRANSACTION;

SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

SET XACT_ABORT ON;

CREATE TABLE [dbo].[tmp_ms_xx_drivers] (
    [DriverId]           INT            IDENTITY (1, 1) NOT NULL,
    [DriverName]         NVARCHAR (50)  NOT NULL,
    [CompanyName]        NVARCHAR (100) NOT NULL,
    [RegistrationNumber] NVARCHAR (20)  NOT NULL,
    [Password]           NVARCHAR (50)  NOT NULL,
    [RepeatPassword]     NVARCHAR (50)  NOT NULL,
    PRIMARY KEY CLUSTERED ([DriverId] ASC)
);

IF EXISTS (SELECT TOP 1 1 
           FROM   [dbo].[drivers])
    BEGIN
        SET IDENTITY_INSERT [dbo].[tmp_ms_xx_drivers] ON;
        INSERT INTO [dbo].[tmp_ms_xx_drivers] ([DriverId], [DriverName], [CompanyName], [RegistrationNumber], [Password], [RepeatPassword])
        SELECT   [DriverId],
                 [DriverName],
                 [CompanyName],
                 [RegistrationNumber],
                 [Password],
                 [RepeatPassword]
        FROM     [dbo].[drivers]
        ORDER BY [DriverId] ASC;
        SET IDENTITY_INSERT [dbo].[tmp_ms_xx_drivers] OFF;
    END

DROP TABLE [dbo].[drivers];

EXECUTE sp_rename N'[dbo].[tmp_ms_xx_drivers]', N'drivers';

COMMIT TRANSACTION;

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;


GO
PRINT N'Update complete.';


GO
