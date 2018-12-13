const slackMocks = {
  createGroups: {
    ok: true,
    group: {
      id: 'GDL7RDC5V',
      name: 'p-sample-partner',
      is_group: true,
      created: 1540194427,
      creator: 'UDECYD0LQ',
      is_archived: false,
      name_normalized: 'sample-channel',
      is_mpim: false,
      is_open: true,
      last_read: '0000000000.000000',
      latest: null,
      unread_count: 0,
      unread_count_display: 0,
      members: [
        'UDECYD0LQ',
      ],
      topic: {
        value: '',
        creator: '',
        last_set: 0,
      },
      purpose: {
        value: '',
        creator: '',
        last_set: 0,
      },
      priority: 0,
    },
    warning: 'missing_charset',
    response_metadata: {
      warnings: [
        'missing_charset',
      ],
    },
  },
  slackUser: {
    ok: true,
    user: {
      id: 'UDABCDEFG',
      team_id: 'TDG6WMQCF',
      name: 'John',
      deleted: false,
      color: 'e0a729',
      real_name: 'John Doe',
      tz: 'Africa/Nairobi',
      tz_label: 'East Africa Time',
      tz_offset: 10800,
      profile: {
        title: '',
        phone: '',
        skype: '',
        real_name: 'John Doe',
        real_name_normalized: 'John Doe',
        display_name: '',
        display_name_normalized: '',
        status_text: '',
        status_emoji: '',
        status_expiration: 0,
        avatar_hash: 'g380c211d1dd',
        email: 'johndoe@mail.com',
      },
      is_admin: false,
      is_owner: false,
      is_primary_owner: false,
      is_restricted: false,
      is_ultra_restricted: false,
      is_bot: false,
      is_app_user: false,
      updated: 1540902916,
      has_2fa: false,
    },
  },
  inviteUser: {
    ok: true,
    group: {
      id: 'GDL7RDC5V',
      name: 'sample-channel',
      is_group: true,
      created: 1540194427,
      creator: 'UDECYD0LQ',
      is_archived: false,
      name_normalized: 'sample-channel',
      is_mpim: false,
      is_open: true,
      last_read: '1540194428.000200',
      latest: {
        user: 'UDABCDEFG',
        text: '<@UDABCDEFG> has joined the group',
        type: 'message',
        subtype: 'group_join',
        ts: '1540194428.000200',
      },
      unread_count: 0,
      unread_count_display: 0,
      members: [
        'UDABCDEFG',
        'UDRH80PLJ',
      ],
      topic: {
        value: '',
        creator: '',
        last_set: 0,
      },
      purpose: {
        value: '',
        creator: '',
        last_set: 0,
      },
      priority: 0,
    },
  },
  removeUser: {
    ok: true,
  },
};

export default slackMocks;
