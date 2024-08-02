
import 'package:get_storage/get_storage.dart';
import '../../constant/local_storage_box/local_storage_box.dart';
import '../../services/app_services.dart';

class GetStorageClass {
  static final box = GetStorage();

  static Future<void> setString({
    required String key,
    required String value,
  }) async {
    await box.write(key, value);
  }

  static Future<String> getString(String key) async {
    return await box.read(key) ?? "";
  }

  static Future<void> setBool({
    required String key,
    required bool value,
  }) async {
    await box.write(key, value);
  }

  static Future<bool?> getBool(String key) async {
    return box.read(key);
  }

  static Future<void> setInt({
    required String key,
    required int value,
  }) async {
    await box.write(key, value);
  }

  static Future<int> getInt(String key) async {
    return await box.read(key) ?? 1;
  }

  static Future<void> clear() async {
    await GetStorageClass.setString(
        key: LocalStorageBox.languageKey,
        value: AppServices.localizationController!.language.languageCode);
    await box.erase();
  }
}