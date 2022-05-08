// inline messages
export const getDeleteMessage = filename =>
  `"${filename}" dosyasını silmeyi istediğinize emin misiniz?`;

export const getLeaveMessage = () =>
  'Bu sayfadaki değişiklikler kaydedilmeyecek. Ayrılmak istediğinize emin misiniz?';

export const getNotFoundMessage = type => `${type} bulunamadı.`;

export const getOverrideMessage = filename =>
  `${filename} dosyasının üzerine yazılacak. Devam edilsin mi?`;

// notification messages
export const getParserErrorMessage = () => 'Ayrıştırma Hatası';

export const getSuccessMessage = () => 'Başarılı';

export const getErrorMessage = () => 'Hata';

export const getUploadSuccessMessage = filename =>
  `${filename} başarılı bir şekilde yüklendi`;

export const getUploadErrorMessage = () => `Dosya yüklenirken bir hata oluştu.`;

export const getFetchErrorMessage = filename =>
  `${filename} dosyasına erişilemedi`;

export const getUpdateErrorMessage = filename =>
  `${filename} dosyası güncellenemedi`;

export const getDeleteErrorMessage = filename =>
  `${filename} dosyası silinemedi`;

export const getPublishDraftMessage = (draftPath, postPath) =>
  `'${draftPath}' yolu '${postPath}' yalu ile değiştirilecek`;

// validation messages
export const getTitleRequiredMessage = () => 'title alanı gereklidir.';

export const getFilenameRequiredMessage = () => 'filename alanı gereklidir.';

export const getContentRequiredMessage = () => 'content alanı gereklidir.';

export const getFilenameNotValidMessage = () => 'filename geçerli değil.';

// sidebar titles
export const sidebar = {
  pages: 'Sayfalar',
  posts: 'Gönderiler',
  drafts: 'Taslaklar',
  datafiles: 'Veri Dosyaları',
  collections: 'Koleksiyonlar',
  staticfiles: 'Statik Dosyalar',
  configuration: 'Ayarlar',
};

// button labels
export const labels = {
  save: {
    label: 'Kaydet',
    triggeredLabel: 'Kaydedildi',
  },
  create: {
    label: 'Oluştur',
    triggeredLabel: 'Oluşturuldu',
  },
  delete: {
    label: 'Sil',
  },
  publish: {
    label: 'Yayınla',
  },
  view: {
    label: 'Görüntüle',
  },
  upload: {
    label: 'Dosyaları yükle',
  },
  viewToggle: {
    label: 'GUI Düzenleyiciyi Seç',
    triggeredLabel: 'Raw Düzenleyiciyi Seç',
  },
};
