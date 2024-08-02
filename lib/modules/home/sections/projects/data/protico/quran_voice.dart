import 'package:portfolio/core/constant/assets/app_assets.dart';

import '../../model/project_model.dart';

MyWorkModel quranVoice = MyWorkModel(
  image: AppAssets().logo,
  name: "Quran Voice",
  gitHubLink: "",
  appStoreLink: "",
  playStoreLink: "",
  details:
      """Mobile application for android and ios using getx and audio players,this app contain google ads and facebook ads ,you can listen to quran voice and collect points from seeing ads i worked on this app with Protico company , this app is not available on stores""",
  imageList: getAllImages(),
);

List<String> getAllImages() {
  List<String> images = [];
  for (int i = 1; i <= 7; i++) {
    images.add("assets/images/Quran$i.png");
  }
  return images;
}
