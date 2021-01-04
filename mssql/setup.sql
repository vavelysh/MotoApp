CREATE DATABASE MotorsportDB;
GO
USE [MotorsportDB]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 03.01.2021 22:47:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 03.01.2021 22:47:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[ImageUrl] [nvarchar](max) NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Circuits]    Script Date: 03.01.2021 22:47:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Circuits](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[City] [nvarchar](max) NULL,
	[Laps] [int] NOT NULL,
	[CircuitLength] [float] NOT NULL,
	[LapRecordTime] [nvarchar](max) NULL,
	[RaceDistance] [float] NOT NULL,
	[CircuitImageUrl] [nvarchar](max) NULL,
	[NationId] [int] NULL,
 CONSTRAINT [PK_Circuits] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Drivers]    Script Date: 03.01.2021 22:47:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Drivers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](max) NULL,
	[LastName] [nvarchar](max) NULL,
	[FaceImgUrl] [nvarchar](max) NULL,
	[NationId] [int] NOT NULL,
 CONSTRAINT [PK_Drivers] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[EventResults]    Script Date: 03.01.2021 22:47:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EventResults](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EventId] [int] NOT NULL,
	[SeasonCraftId] [int] NOT NULL,
	[Pos] [int] NULL,
	[Laps] [int] NULL,
	[Grid] [int] NULL,
	[Pits] [int] NULL,
	[Pts] [int] NULL,
	[TimeOne] [datetime2](7) NULL,
	[TimeTwo] [datetime2](7) NULL,
 CONSTRAINT [PK_EventResults] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Events]    Script Date: 03.01.2021 22:47:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Events](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[EventType] [nvarchar](max) NULL,
	[EventDay] [datetime2](7) NOT NULL,
	[GrandPrixId] [int] NULL,
 CONSTRAINT [PK_Events] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GrandPrixes]    Script Date: 03.01.2021 22:47:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GrandPrixes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[StartRaceDay] [datetime2](7) NOT NULL,
	[EndRaceDay] [datetime2](7) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[ClosedState] [bit] NOT NULL,
	[CircuitId] [int] NULL,
	[SeasonId] [int] NULL,
 CONSTRAINT [PK_GrandPrixes] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Nations]    Script Date: 03.01.2021 22:47:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Nations](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[ImageUrl] [nvarchar](max) NULL,
 CONSTRAINT [PK_Nations] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[SeasonCrafts]    Script Date: 03.01.2021 22:47:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SeasonCrafts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[DriverId] [int] NOT NULL,
	[TeamId] [int] NOT NULL,
	[SeasonId] [int] NOT NULL,
	[Wins] [int] NOT NULL,
	[PolePositions] [int] NULL,
	[Podiums] [int] NULL,
	[Points] [int] NOT NULL,
 CONSTRAINT [PK_SeasonCrafts] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Seasons]    Script Date: 03.01.2021 22:47:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Seasons](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Begin] [datetime2](7) NOT NULL,
	[End] [datetime2](7) NOT NULL,
	[CategoryId] [int] NULL,
 CONSTRAINT [PK_Seasons] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Teams]    Script Date: 03.01.2021 22:47:09 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Teams](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[ImageUrl] [nvarchar](max) NULL,
 CONSTRAINT [PK_Teams] PRIMARY KEY CLUSTERED
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Circuits]  WITH CHECK ADD  CONSTRAINT [FK_Circuits_Nations_NationId] FOREIGN KEY([NationId])
REFERENCES [dbo].[Nations] ([Id])
GO
ALTER TABLE [dbo].[Circuits] CHECK CONSTRAINT [FK_Circuits_Nations_NationId]
GO
ALTER TABLE [dbo].[Drivers]  WITH CHECK ADD  CONSTRAINT [FK_Drivers_Nations_NationId] FOREIGN KEY([NationId])
REFERENCES [dbo].[Nations] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Drivers] CHECK CONSTRAINT [FK_Drivers_Nations_NationId]
GO
ALTER TABLE [dbo].[EventResults]  WITH CHECK ADD  CONSTRAINT [FK_EventResults_SeasonCrafts_SeasonCraftId] FOREIGN KEY([SeasonCraftId])
REFERENCES [dbo].[SeasonCrafts] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[EventResults] CHECK CONSTRAINT [FK_EventResults_SeasonCrafts_SeasonCraftId]
GO
ALTER TABLE [dbo].[Events]  WITH CHECK ADD  CONSTRAINT [FK_Events_GrandPrixes_GrandPrixId] FOREIGN KEY([GrandPrixId])
REFERENCES [dbo].[GrandPrixes] ([Id])
GO
ALTER TABLE [dbo].[Events] CHECK CONSTRAINT [FK_Events_GrandPrixes_GrandPrixId]
GO
ALTER TABLE [dbo].[GrandPrixes]  WITH CHECK ADD  CONSTRAINT [FK_GrandPrixes_Circuits_CircuitId] FOREIGN KEY([CircuitId])
REFERENCES [dbo].[Circuits] ([Id])
GO
ALTER TABLE [dbo].[GrandPrixes] CHECK CONSTRAINT [FK_GrandPrixes_Circuits_CircuitId]
GO
ALTER TABLE [dbo].[GrandPrixes]  WITH CHECK ADD  CONSTRAINT [FK_GrandPrixes_Seasons_SeasonId] FOREIGN KEY([SeasonId])
REFERENCES [dbo].[Seasons] ([Id])
GO
ALTER TABLE [dbo].[GrandPrixes] CHECK CONSTRAINT [FK_GrandPrixes_Seasons_SeasonId]
GO
ALTER TABLE [dbo].[SeasonCrafts]  WITH CHECK ADD  CONSTRAINT [FK_SeasonCrafts_Drivers_DriverId] FOREIGN KEY([DriverId])
REFERENCES [dbo].[Drivers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[SeasonCrafts] CHECK CONSTRAINT [FK_SeasonCrafts_Drivers_DriverId]
GO
ALTER TABLE [dbo].[SeasonCrafts]  WITH CHECK ADD  CONSTRAINT [FK_SeasonCrafts_Seasons_SeasonId] FOREIGN KEY([SeasonId])
REFERENCES [dbo].[Seasons] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[SeasonCrafts] CHECK CONSTRAINT [FK_SeasonCrafts_Seasons_SeasonId]
GO
ALTER TABLE [dbo].[SeasonCrafts]  WITH CHECK ADD  CONSTRAINT [FK_SeasonCrafts_Teams_TeamId] FOREIGN KEY([TeamId])
REFERENCES [dbo].[Teams] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[SeasonCrafts] CHECK CONSTRAINT [FK_SeasonCrafts_Teams_TeamId]
GO
ALTER TABLE [dbo].[Seasons]  WITH CHECK ADD  CONSTRAINT [FK_Seasons_Categories_CategoryId] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([Id])
GO
ALTER TABLE [dbo].[Seasons] CHECK CONSTRAINT [FK_Seasons_Categories_CategoryId]
GO
