import 'package:portfolio/core/constant/assets/app_assets.dart';

import '../../model/project_model.dart';

MyWorkModel laeeb = MyWorkModel(
  image: AppAssets().logo,
  name: "Laeeb",
  gitHubLink: "",
  appStoreLink: "",
  playStoreLink: "",
  details:
      """Mobile Game built with flutter and getx, it is directed to children between 6 to 12 years old ,it can be played 1v1 or 2v2 as team, it contains two type of games the letters and the numbers, it was build to help the children be better at math and strength their Arabic language""",
  imageList: getAllImages(),
);

List<String> getAllImages() {
  List<String> images = [];
  for (int i = 1; i <= 8; i++) {
    images.add("assets/images/laeeb$i.png");
  }
  return images;
}
