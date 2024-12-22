const solsticesAndEquinoxes = [
  {
    year: 2001,
    spring: '2001-03-20T13:31:00.000Z',
    summer: '2001-06-21T07:38:00.000Z',
    fall: '2001-09-22T23:05:00.000Z',
    winter: '2001-12-21T19:22:00.000Z'
  },
  {
    year: 2002,
    spring: '2002-03-20T19:16:00.000Z',
    summer: '2002-06-21T13:25:00.000Z',
    fall: '2002-09-23T04:56:00.000Z',
    winter: '2002-12-22T01:15:00.000Z'
  },
  {
    year: 2003,
    spring: '2003-03-21T01:00:00.000Z',
    summer: '2003-06-21T19:11:00.000Z',
    fall: '2003-09-23T10:47:00.000Z',
    winter: '2003-12-22T07:04:00.000Z'
  },
  {
    year: 2004,
    spring: '2004-03-20T06:49:00.000Z',
    summer: '2004-06-21T00:57:00.000Z',
    fall: '2004-09-22T16:30:00.000Z',
    winter: '2004-12-21T12:42:00.000Z'
  },
  {
    year: 2005,
    spring: '2005-03-20T12:34:00.000Z',
    summer: '2005-06-21T06:46:00.000Z',
    fall: '2005-09-22T22:23:00.000Z',
    winter: '2005-12-21T18:35:00.000Z'
  },
  {
    year: 2006,
    spring: '2006-03-20T18:25:00.000Z',
    summer: '2006-06-21T12:26:00.000Z',
    fall: '2006-09-23T04:04:00.000Z',
    winter: '2006-12-22T00:22:00.000Z'
  },
  {
    year: 2007,
    spring: '2007-03-21T00:07:00.000Z',
    summer: '2007-06-21T18:06:00.000Z',
    fall: '2007-09-23T09:51:00.000Z',
    winter: '2007-12-22T06:08:00.000Z'
  },
  {
    year: 2008,
    spring: '2008-03-20T05:49:00.000Z',
    summer: '2008-06-21T00:00:00.000Z',
    fall: '2008-09-22T15:45:00.000Z',
    winter: '2008-12-21T12:04:00.000Z'
  },
  {
    year: 2009,
    spring: '2009-03-20T11:44:00.000Z',
    summer: '2009-06-21T05:45:00.000Z',
    fall: '2009-09-22T21:18:00.000Z',
    winter: '2009-12-21T17:47:00.000Z'
  },
  {
    year: 2010,
    spring: '2010-03-20T17:32:00.000Z',
    summer: '2010-06-21T11:28:00.000Z',
    fall: '2010-09-23T03:09:00.000Z',
    winter: '2010-12-21T23:38:00.000Z'
  },
  {
    year: 2011,
    spring: '2011-03-20T23:21:00.000Z',
    summer: '2011-06-21T17:16:00.000Z',
    fall: '2011-09-23T09:05:00.000Z',
    winter: '2011-12-22T05:30:00.000Z'
  },
  {
    year: 2012,
    spring: '2012-03-20T05:15:00.000Z',
    summer: '2012-06-20T23:08:00.000Z',
    fall: '2012-09-22T14:49:00.000Z',
    winter: '2012-12-21T11:12:00.000Z'
  },
  {
    year: 2013,
    spring: '2013-03-20T11:02:00.000Z',
    summer: '2013-06-21T05:04:00.000Z',
    fall: '2013-09-22T20:44:00.000Z',
    winter: '2013-12-21T17:11:00.000Z'
  },
  {
    year: 2014,
    spring: '2014-03-20T16:57:00.000Z',
    summer: '2014-06-21T10:52:00.000Z',
    fall: '2014-09-23T02:30:00.000Z',
    winter: '2014-12-21T23:03:00.000Z'
  },
  {
    year: 2015,
    spring: '2015-03-20T22:45:00.000Z',
    summer: '2015-06-21T16:38:00.000Z',
    fall: '2015-09-23T08:20:00.000Z',
    winter: '2015-12-22T04:48:00.000Z'
  },
  {
    year: 2016,
    spring: '2016-03-20T04:31:00.000Z',
    summer: '2016-06-20T22:35:00.000Z',
    fall: '2016-09-22T14:21:00.000Z',
    winter: '2016-12-21T10:45:00.000Z'
  },
  {
    year: 2017,
    spring: '2017-03-20T10:29:00.000Z',
    summer: '2017-06-21T04:25:00.000Z',
    fall: '2017-09-22T20:02:00.000Z',
    winter: '2017-12-21T16:29:00.000Z'
  },
  {
    year: 2018,
    spring: '2018-03-20T16:15:00.000Z',
    summer: '2018-06-21T10:07:00.000Z',
    fall: '2018-09-23T01:54:00.000Z',
    winter: '2018-12-21T22:22:00.000Z'
  },
  {
    year: 2019,
    spring: '2019-03-20T21:58:00.000Z',
    summer: '2019-06-21T15:54:00.000Z',
    fall: '2019-09-23T07:50:00.000Z',
    winter: '2019-12-22T04:19:00.000Z'
  },
  {
    year: 2020,
    spring: '2020-03-20T03:50:00.000Z',
    summer: '2020-06-20T21:43:00.000Z',
    fall: '2020-09-22T13:31:00.000Z',
    winter: '2020-12-21T10:03:00.000Z'
  },
  {
    year: 2021,
    spring: '2021-03-20T09:37:00.000Z',
    summer: '2021-06-21T03:32:00.000Z',
    fall: '2021-09-22T19:21:00.000Z',
    winter: '2021-12-21T15:59:00.000Z'
  },
  {
    year: 2022,
    spring: '2022-03-20T15:33:00.000Z',
    summer: '2022-06-21T09:14:00.000Z',
    fall: '2022-09-23T01:04:00.000Z',
    winter: '2022-12-21T21:48:00.000Z'
  },
  {
    year: 2023,
    spring: '2023-03-20T21:25:00.000Z',
    summer: '2023-06-21T14:58:00.000Z',
    fall: '2023-09-23T06:50:00.000Z',
    winter: '2023-12-22T03:28:00.000Z'
  },
  {
    year: 2024,
    spring: '2024-03-20T03:07:00.000Z',
    summer: '2024-06-20T20:51:00.000Z',
    fall: '2024-09-22T12:44:00.000Z',
    winter: '2024-12-21T09:20:00.000Z'
  },
  {
    year: 2025,
    spring: '2025-03-20T09:02:00.000Z',
    summer: '2025-06-21T02:42:00.000Z',
    fall: '2025-09-22T18:20:00.000Z',
    winter: '2025-12-21T15:03:00.000Z'
  },
  {
    year: 2026,
    spring: '2026-03-20T14:46:00.000Z',
    summer: '2026-06-21T08:25:00.000Z',
    fall: '2026-09-23T00:06:00.000Z',
    winter: '2026-12-21T20:50:00.000Z'
  },
  {
    year: 2027,
    spring: '2027-03-20T20:25:00.000Z',
    summer: '2027-06-21T14:11:00.000Z',
    fall: '2027-09-23T06:02:00.000Z',
    winter: '2027-12-22T02:43:00.000Z'
  },
  {
    year: 2028,
    spring: '2028-03-20T02:17:00.000Z',
    summer: '2028-06-20T20:02:00.000Z',
    fall: '2028-09-22T11:45:00.000Z',
    winter: '2028-12-21T08:20:00.000Z'
  },
  {
    year: 2029,
    spring: '2029-03-20T08:01:00.000Z',
    summer: '2029-06-21T01:48:00.000Z',
    fall: '2029-09-22T17:37:00.000Z',
    winter: '2029-12-21T14:14:00.000Z'
  },
  {
    year: 2030,
    spring: '2030-03-20T13:51:00.000Z',
    summer: '2030-06-21T07:31:00.000Z',
    fall: '2030-09-22T23:27:00.000Z',
    winter: '2030-12-21T20:09:00.000Z'
  },
  {
    year: 2031,
    spring: '2031-03-20T19:41:00.000Z',
    summer: '2031-06-21T13:17:00.000Z',
    fall: '2031-09-23T05:15:00.000Z',
    winter: '2031-12-22T01:56:00.000Z'
  },
  {
    year: 2032,
    spring: '2032-03-20T01:23:00.000Z',
    summer: '2032-06-20T19:09:00.000Z',
    fall: '2032-09-22T11:11:00.000Z',
    winter: '2032-12-21T07:57:00.000Z'
  },
  {
    year: 2033,
    spring: '2033-03-20T07:23:00.000Z',
    summer: '2033-06-21T01:01:00.000Z',
    fall: '2033-09-22T16:52:00.000Z',
    winter: '2033-12-21T13:45:00.000Z'
  },
  {
    year: 2034,
    spring: '2034-03-20T13:18:00.000Z',
    summer: '2034-06-21T06:45:00.000Z',
    fall: '2034-09-22T22:41:00.000Z',
    winter: '2034-12-21T19:35:00.000Z'
  },
  {
    year: 2035,
    spring: '2035-03-20T19:03:00.000Z',
    summer: '2035-06-21T12:33:00.000Z',
    fall: '2035-09-23T04:39:00.000Z',
    winter: '2035-12-22T01:31:00.000Z'
  },
  {
    year: 2036,
    spring: '2036-03-20T01:02:00.000Z',
    summer: '2036-06-20T18:31:00.000Z',
    fall: '2036-09-22T10:23:00.000Z',
    winter: '2036-12-21T07:12:00.000Z'
  },
  {
    year: 2037,
    spring: '2037-03-20T06:50:00.000Z',
    summer: '2037-06-21T00:22:00.000Z',
    fall: '2037-09-22T16:13:00.000Z',
    winter: '2037-12-21T13:08:00.000Z'
  },
  {
    year: 2038,
    spring: '2038-03-20T12:40:00.000Z',
    summer: '2038-06-21T06:09:00.000Z',
    fall: '2038-09-22T22:02:00.000Z',
    winter: '2038-12-21T19:01:00.000Z'
  },
  {
    year: 2039,
    spring: '2039-03-20T18:32:00.000Z',
    summer: '2039-06-21T11:58:00.000Z',
    fall: '2039-09-23T03:50:00.000Z',
    winter: '2039-12-22T00:41:00.000Z'
  },
  {
    year: 2040,
    spring: '2040-03-20T00:11:00.000Z',
    summer: '2040-06-20T17:46:00.000Z',
    fall: '2040-09-22T09:44:00.000Z',
    winter: '2040-12-21T06:33:00.000Z'
  },
  {
    year: 2041,
    spring: '2041-03-20T06:07:00.000Z',
    summer: '2041-06-20T23:37:00.000Z',
    fall: '2041-09-22T15:27:00.000Z',
    winter: '2041-12-21T12:19:00.000Z'
  },
  {
    year: 2042,
    spring: '2042-03-20T11:53:00.000Z',
    summer: '2042-06-21T05:16:00.000Z',
    fall: '2042-09-22T21:11:00.000Z',
    winter: '2042-12-21T18:04:00.000Z'
  },
  {
    year: 2043,
    spring: '2043-03-20T17:29:00.000Z',
    summer: '2043-06-21T10:59:00.000Z',
    fall: '2043-09-23T03:07:00.000Z',
    winter: '2043-12-22T00:02:00.000Z'
  },
  {
    year: 2044,
    spring: '2044-03-19T23:20:00.000Z',
    summer: '2044-06-20T16:50:00.000Z',
    fall: '2044-09-22T08:47:00.000Z',
    winter: '2044-12-21T05:43:00.000Z'
  },
  {
    year: 2045,
    spring: '2045-03-20T05:08:00.000Z',
    summer: '2045-06-20T22:34:00.000Z',
    fall: '2045-09-22T14:33:00.000Z',
    winter: '2045-12-21T11:36:00.000Z'
  },
  {
    year: 2046,
    spring: '2046-03-20T10:58:00.000Z',
    summer: '2046-06-21T04:15:00.000Z',
    fall: '2046-09-22T20:22:00.000Z',
    winter: '2046-12-21T17:28:00.000Z'
  },
  {
    year: 2047,
    spring: '2047-03-20T16:52:00.000Z',
    summer: '2047-06-21T10:02:00.000Z',
    fall: '2047-09-23T02:07:00.000Z',
    winter: '2047-12-21T23:07:00.000Z'
  },
  {
    year: 2048,
    spring: '2048-03-19T22:34:00.000Z',
    summer: '2048-06-20T15:54:00.000Z',
    fall: '2048-09-22T08:01:00.000Z',
    winter: '2048-12-21T05:02:00.000Z'
  },
  {
    year: 2049,
    spring: '2049-03-20T04:28:00.000Z',
    summer: '2049-06-20T21:47:00.000Z',
    fall: '2049-09-22T13:42:00.000Z',
    winter: '2049-12-21T10:51:00.000Z'
  },
  {
    year: 2050,
    spring: '2050-03-20T10:20:00.000Z',
    summer: '2050-06-21T03:33:00.000Z',
    fall: '2050-09-22T19:29:00.000Z',
    winter: '2050-12-21T16:39:00.000Z'
  },
  {
    year: 2051,
    spring: '2051-03-20T15:58:00.000Z',
    summer: '2051-06-21T09:17:00.000Z',
    fall: '2051-09-23T01:26:00.000Z',
    winter: '2051-12-21T22:33:00.000Z'
  },
  {
    year: 2052,
    spring: '2052-03-19T21:56:00.000Z',
    summer: '2052-06-20T15:16:00.000Z',
    fall: '2052-09-22T07:16:00.000Z',
    winter: '2052-12-21T04:18:00.000Z'
  },
  {
    year: 2053,
    spring: '2053-03-20T03:46:00.000Z',
    summer: '2053-06-20T21:03:00.000Z',
    fall: '2053-09-22T13:05:00.000Z',
    winter: '2053-12-21T10:09:00.000Z'
  },
  {
    year: 2054,
    spring: '2054-03-20T09:35:00.000Z',
    summer: '2054-06-21T02:47:00.000Z',
    fall: '2054-09-22T19:00:00.000Z',
    winter: '2054-12-21T16:10:00.000Z'
  },
  {
    year: 2055,
    spring: '2055-03-20T15:28:00.000Z',
    summer: '2055-06-21T08:39:00.000Z',
    fall: '2055-09-23T00:48:00.000Z',
    winter: '2055-12-21T21:56:00.000Z'
  },
  {
    year: 2056,
    spring: '2056-03-19T21:11:00.000Z',
    summer: '2056-06-20T14:29:00.000Z',
    fall: '2056-09-22T06:40:00.000Z',
    winter: '2056-12-21T03:52:00.000Z'
  },
  {
    year: 2057,
    spring: '2057-03-20T03:08:00.000Z',
    summer: '2057-06-20T20:19:00.000Z',
    fall: '2057-09-22T12:23:00.000Z',
    winter: '2057-12-21T09:42:00.000Z'
  },
  {
    year: 2058,
    spring: '2058-03-20T09:04:00.000Z',
    summer: '2058-06-21T02:03:00.000Z',
    fall: '2058-09-22T18:07:00.000Z',
    winter: '2058-12-21T15:24:00.000Z'
  },
  {
    year: 2059,
    spring: '2059-03-20T14:44:00.000Z',
    summer: '2059-06-21T07:47:00.000Z',
    fall: '2059-09-23T00:03:00.000Z',
    winter: '2059-12-21T21:18:00.000Z'
  },
  {
    year: 2060,
    spring: '2060-03-19T20:37:00.000Z',
    summer: '2060-06-20T13:44:00.000Z',
    fall: '2060-09-22T05:47:00.000Z',
    winter: '2060-12-21T03:00:00.000Z'
  },
  {
    year: 2061,
    spring: '2061-03-20T02:26:00.000Z',
    summer: '2061-06-20T19:33:00.000Z',
    fall: '2061-09-22T11:31:00.000Z',
    winter: '2061-12-21T08:49:00.000Z'
  },
  {
    year: 2062,
    spring: '2062-03-20T08:07:00.000Z',
    summer: '2062-06-21T01:10:00.000Z',
    fall: '2062-09-22T17:19:00.000Z',
    winter: '2062-12-21T14:42:00.000Z'
  },
  {
    year: 2063,
    spring: '2063-03-20T13:59:00.000Z',
    summer: '2063-06-21T07:02:00.000Z',
    fall: '2063-09-22T23:08:00.000Z',
    winter: '2063-12-21T20:22:00.000Z'
  },
  {
    year: 2064,
    spring: '2064-03-19T19:40:00.000Z',
    summer: '2064-06-20T12:47:00.000Z',
    fall: '2064-09-22T04:58:00.000Z',
    winter: '2064-12-21T02:10:00.000Z'
  },
  {
    year: 2065,
    spring: '2065-03-20T01:27:00.000Z',
    summer: '2065-06-20T18:31:00.000Z',
    fall: '2065-09-22T10:41:00.000Z',
    winter: '2065-12-21T07:59:00.000Z'
  },
  {
    year: 2066,
    spring: '2066-03-20T07:19:00.000Z',
    summer: '2066-06-21T00:16:00.000Z',
    fall: '2066-09-22T16:27:00.000Z',
    winter: '2066-12-21T13:45:00.000Z'
  },
  {
    year: 2067,
    spring: '2067-03-20T12:55:00.000Z',
    summer: '2067-06-21T05:56:00.000Z',
    fall: '2067-09-22T22:20:00.000Z',
    winter: '2067-12-21T19:44:00.000Z'
  },
  {
    year: 2068,
    spring: '2068-03-19T18:51:00.000Z',
    summer: '2068-06-20T11:55:00.000Z',
    fall: '2068-09-22T04:09:00.000Z',
    winter: '2068-12-21T01:34:00.000Z'
  },
  {
    year: 2069,
    spring: '2069-03-20T00:44:00.000Z',
    summer: '2069-06-20T17:40:00.000Z',
    fall: '2069-09-22T09:51:00.000Z',
    winter: '2069-12-21T07:21:00.000Z'
  },
  {
    year: 2070,
    spring: '2070-03-20T06:35:00.000Z',
    summer: '2070-06-20T23:22:00.000Z',
    fall: '2070-09-22T15:45:00.000Z',
    winter: '2070-12-21T13:19:00.000Z'
  },
  {
    year: 2071,
    spring: '2071-03-20T12:36:00.000Z',
    summer: '2071-06-21T05:21:00.000Z',
    fall: '2071-09-22T21:39:00.000Z',
    winter: '2071-12-21T19:05:00.000Z'
  },
  {
    year: 2072,
    spring: '2072-03-19T18:19:00.000Z',
    summer: '2072-06-20T11:12:00.000Z',
    fall: '2072-09-22T03:26:00.000Z',
    winter: '2072-12-21T00:54:00.000Z'
  },
  {
    year: 2073,
    spring: '2073-03-20T00:12:00.000Z',
    summer: '2073-06-20T17:06:00.000Z',
    fall: '2073-09-22T09:14:00.000Z',
    winter: '2073-12-21T06:50:00.000Z'
  },
  {
    year: 2074,
    spring: '2074-03-20T06:09:00.000Z',
    summer: '2074-06-20T22:59:00.000Z',
    fall: '2074-09-22T15:04:00.000Z',
    winter: '2074-12-21T12:36:00.000Z'
  },
  {
    year: 2075,
    spring: '2075-03-20T11:48:00.000Z',
    summer: '2075-06-21T04:41:00.000Z',
    fall: '2075-09-22T21:00:00.000Z',
    winter: '2075-12-21T18:28:00.000Z'
  },
  {
    year: 2076,
    spring: '2076-03-19T17:37:00.000Z',
    summer: '2076-06-20T10:35:00.000Z',
    fall: '2076-09-22T02:48:00.000Z',
    winter: '2076-12-21T00:12:00.000Z'
  },
  {
    year: 2077,
    spring: '2077-03-19T23:30:00.000Z',
    summer: '2077-06-20T16:23:00.000Z',
    fall: '2077-09-22T08:35:00.000Z',
    winter: '2077-12-21T06:00:00.000Z'
  },
  {
    year: 2078,
    spring: '2078-03-20T05:11:00.000Z',
    summer: '2078-06-20T21:58:00.000Z',
    fall: '2078-09-22T14:25:00.000Z',
    winter: '2078-12-21T11:59:00.000Z'
  },
  {
    year: 2079,
    spring: '2079-03-20T11:03:00.000Z',
    summer: '2079-06-21T03:51:00.000Z',
    fall: '2079-09-22T20:15:00.000Z',
    winter: '2079-12-21T17:46:00.000Z'
  },
  {
    year: 2080,
    spring: '2080-03-19T16:43:00.000Z',
    summer: '2080-06-20T09:33:00.000Z',
    fall: '2080-09-22T01:55:00.000Z',
    winter: '2080-12-20T23:31:00.000Z'
  },
  {
    year: 2081,
    spring: '2081-03-19T22:34:00.000Z',
    summer: '2081-06-20T15:16:00.000Z',
    fall: '2081-09-22T07:38:00.000Z',
    winter: '2081-12-21T05:22:00.000Z'
  },
  {
    year: 2082,
    spring: '2082-03-20T04:32:00.000Z',
    summer: '2082-06-20T21:04:00.000Z',
    fall: '2082-09-22T13:24:00.000Z',
    winter: '2082-12-21T11:06:00.000Z'
  },
  {
    year: 2083,
    spring: '2083-03-20T10:08:00.000Z',
    summer: '2083-06-21T02:41:00.000Z',
    fall: '2083-09-22T19:10:00.000Z',
    winter: '2083-12-21T16:51:00.000Z'
  },
  {
    year: 2084,
    spring: '2084-03-19T15:58:00.000Z',
    summer: '2084-06-20T08:39:00.000Z',
    fall: '2084-09-22T00:58:00.000Z',
    winter: '2084-12-20T22:40:00.000Z'
  },
  {
    year: 2085,
    spring: '2085-03-19T21:53:00.000Z',
    summer: '2085-06-20T14:33:00.000Z',
    fall: '2085-09-22T06:43:00.000Z',
    winter: '2085-12-21T04:29:00.000Z'
  },
  {
    year: 2086,
    spring: '2086-03-20T03:36:00.000Z',
    summer: '2086-06-20T20:11:00.000Z',
    fall: '2086-09-22T12:33:00.000Z',
    winter: '2086-12-21T10:24:00.000Z'
  },
  {
    year: 2087,
    spring: '2087-03-20T09:27:00.000Z',
    summer: '2087-06-21T02:05:00.000Z',
    fall: '2087-09-22T18:27:00.000Z',
    winter: '2087-12-21T16:07:00.000Z'
  },
  {
    year: 2088,
    spring: '2088-03-19T15:16:00.000Z',
    summer: '2088-06-20T07:57:00.000Z',
    fall: '2088-09-22T00:18:00.000Z',
    winter: '2088-12-20T21:56:00.000Z'
  },
  {
    year: 2089,
    spring: '2089-03-19T21:07:00.000Z',
    summer: '2089-06-20T13:43:00.000Z',
    fall: '2089-09-22T06:07:00.000Z',
    winter: '2089-12-21T03:53:00.000Z'
  },
  {
    year: 2090,
    spring: '2090-03-20T03:03:00.000Z',
    summer: '2090-06-20T19:37:00.000Z',
    fall: '2090-09-22T12:01:00.000Z',
    winter: '2090-12-21T09:45:00.000Z'
  },
  {
    year: 2091,
    spring: '2091-03-20T08:40:00.000Z',
    summer: '2091-06-21T01:17:00.000Z',
    fall: '2091-09-22T17:49:00.000Z',
    winter: '2091-12-21T15:37:00.000Z'
  },
  {
    year: 2092,
    spring: '2092-03-19T14:33:00.000Z',
    summer: '2092-06-20T07:14:00.000Z',
    fall: '2092-09-21T23:41:00.000Z',
    winter: '2092-12-20T21:31:00.000Z'
  },
  {
    year: 2093,
    spring: '2093-03-19T20:35:00.000Z',
    summer: '2093-06-20T13:08:00.000Z',
    fall: '2093-09-22T05:30:00.000Z',
    winter: '2093-12-21T03:21:00.000Z'
  },
  {
    year: 2094,
    spring: '2094-03-20T02:20:00.000Z',
    summer: '2094-06-20T18:40:00.000Z',
    fall: '2094-09-22T11:15:00.000Z',
    winter: '2094-12-21T09:11:00.000Z'
  },
  {
    year: 2095,
    spring: '2095-03-20T08:14:00.000Z',
    summer: '2095-06-21T00:38:00.000Z',
    fall: '2095-09-22T17:10:00.000Z',
    winter: '2095-12-21T15:00:00.000Z'
  },
  {
    year: 2096,
    spring: '2096-03-19T14:03:00.000Z',
    summer: '2096-06-20T06:31:00.000Z',
    fall: '2096-09-21T22:55:00.000Z',
    winter: '2096-12-20T20:46:00.000Z'
  },
  {
    year: 2097,
    spring: '2097-03-19T19:49:00.000Z',
    summer: '2097-06-20T12:14:00.000Z',
    fall: '2097-09-22T04:37:00.000Z',
    winter: '2097-12-21T02:38:00.000Z'
  },
  {
    year: 2098,
    spring: '2098-03-20T01:38:00.000Z',
    summer: '2098-06-20T18:01:00.000Z',
    fall: '2098-09-22T10:22:00.000Z',
    winter: '2098-12-21T08:19:00.000Z'
  },
  {
    year: 2099,
    spring: '2099-03-20T07:17:00.000Z',
    summer: '2099-06-20T23:41:00.000Z',
    fall: '2099-09-22T16:10:00.000Z',
    winter: '2099-12-21T14:04:00.000Z'
  },
  {
    year: 2100,
    spring: '2100-03-20T13:04:00.000Z',
    summer: '2100-06-21T05:32:00.000Z',
    fall: '2100-09-22T22:00:00.000Z',
    winter: '2100-12-21T19:51:00.000Z'
  }
]

export const getEvents = () => {
  // get the events for the year, convert winter to yule, spring to Ostara, summer to Litha, fall to Mabon
  const events = []
  // get this year and next year
  const year = new Date().getFullYear()
  const nextYear = year + 1

  const Yule = {
    emoji: '🎄',
    name: 'Yule',
    type: 'Solstice',
    dateTime: solsticesAndEquinoxes.filter((event) => event.year === year)[0].winter
  }
  // If the dateTime is in the past, use the dateTime from next year
  if (new Date(Yule.dateTime) < new Date()) {
    Yule.dateTime = solsticesAndEquinoxes.filter((event) => event.year === nextYear)[0].winter
  }
  events.push(Yule)

  // Next is Ostara
  const Ostara = {
    emoji: '🌷',
    name: 'Ostara',
    type: 'Equinox',
    dateTime: solsticesAndEquinoxes.filter((event) => event.year === year)[0].spring
  }
  // If the dateTime is in the past, use the dateTime from next year
  if (new Date(Ostara.dateTime) < new Date()) {
    Ostara.dateTime = solsticesAndEquinoxes.filter((event) => event.year === nextYear)[0].spring
  }
  events.push(Ostara)

  // Next is Litha
  const Litha = {
    emoji: '🌞',
    name: 'Litha',
    type: 'Solstice',
    dateTime: solsticesAndEquinoxes.filter((event) => event.year === year)[0].summer
  }
  // If the dateTime is in the past, use the dateTime from next year
  if (new Date(Litha.dateTime) < new Date()) {
    Litha.dateTime = solsticesAndEquinoxes.filter((event) => event.year === nextYear)[0].summer
  }
  events.push(Litha)

  // Next is Mabon
  const Mabon = {
    emoji: '🍂',
    name: 'Mabon',
    type: 'Equinox',
    dateTime: solsticesAndEquinoxes.filter((event) => event.year === year)[0].fall
  }
  // If the dateTime is in the past, use the dateTime from next year
  if (new Date(Mabon.dateTime) < new Date()) {
    Mabon.dateTime = solsticesAndEquinoxes.filter((event) => event.year === nextYear)[0].fall
  }
  events.push(Mabon)

  // so we can calculate Imbolc, Beltane, Lughnasadh and Samhain
  // First Imbolc where the dateTime is the 2nd of Febuary
  const Imbolc = {
    emoji: '🌱',
    name: 'Imbolc',
    type: 'Cross Quarter',
    dateTime: new Date().setFullYear(year, 1, 2)
  }
  // If the dateTime is in the past, use the dateTime from next year
  if (new Date(Imbolc.dateTime) < new Date()) {
    Imbolc.dateTime = new Date().setFullYear(nextYear, 1, 2)
  }
  events.push(Imbolc)

  // Next is Beltane
  const Beltane = {
    emoji: '🌺',
    name: 'Beltane',
    type: 'Cross Quarter',
    dateTime: new Date().setFullYear(year, 4, 1)
  }
  // If the dateTime is in the past, use the dateTime from next year
  if (new Date(Beltane.dateTime) < new Date()) {
    Beltane.dateTime = new Date().setFullYear(nextYear, 4, 1)
  }
  events.push(Beltane)

  // Next is Lughnasadh
  const Lughnasadh = {
    emoji: '🌾',
    name: 'Lughnasadh',
    type: 'Cross Quarter',
    dateTime: new Date().setFullYear(year, 7, 1)
  }
  // If the dateTime is in the past, use the dateTime from next year
  if (new Date(Lughnasadh.dateTime) < new Date()) {
    Lughnasadh.dateTime = new Date().setFullYear(nextYear, 7, 1)
  }
  events.push(Lughnasadh)

  // Next is Samhain
  const Samhain = {
    emoji: '🎃',
    name: 'Samhain',
    type: 'Cross Quarter',
    dateTime: new Date().setFullYear(year, 10, 1)
  }
  // If the dateTime is in the past, use the dateTime from next year
  if (new Date(Samhain.dateTime) < new Date()) {
    Samhain.dateTime = new Date().setFullYear(nextYear, 10, 1)
  }
  events.push(Samhain)

  // sort the events by date
  events.sort((a, b) => {
    return new Date(a.dateTime) - new Date(b.dateTime)
  })
  return events
}
